(ns omchaya.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [dommy.core :as dommy]
            [omchaya.api.mock :as mock-api]
            [omchaya.components.app :as app]
            [omchaya.datetime :as dt]
            [omchaya.mock-data :as mock-data]
            [omchaya.utils :as utils]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]])
  (:use-macros [dommy.macros :only [sel sel1]]))

(enable-console-print!)

(def controls-ch
  (chan))

(def api-ch
  (chan))

(def app-state
  (atom (mock-data/initial-state {:controls controls-ch
                                  :api api-ch})))

(defn scroll-to-latest-message! [target channel-id]
  (let [channel (sel1 target (str "#channels-" channel-id))
        activities (sel channel :.activity)
        latest (last activities)]
    (when (and channel latest)
      (set! (.-scrollTop channel) (.-offsetTop latest)))))

(defn scroll-to-latest-message-when-appropriate!
  "If the second-to-last message is visible in the chat viewport, then
  scroll to the latest message"
  [target channel-id]
  (let [channel-el (sel1 target (str "#channels-" channel-id))
        activities-els (sel channel-el :.activity)
        second-latest-el (last (drop-last activities-els))
        latest-el  (last activities-els)]
    (when (and channel-el second-latest-el)
      (let [channel-view-bottom (+ (.-scrollTop channel-el)
                                   (.-clientHeight channel-el))]
        (when (> channel-view-bottom (.-offsetTop second-latest-el))
          (set! (.-scrollTop channel-el) (.-offsetTop latest-el)))))))

(defn append-activity-to-channel [state channel-id activity]
  (update-in state [:channels channel-id :activities] (comp (partial sort-by :created_at) conj) activity))

(defn drop-old-activity-from-channel [state channel-id message-limit]
  (update-in state [:channels channel-id :activities] (partial take-last message-limit)))

(defmulti api-event
  (fn [target message args state] message))

(defmethod api-event :channel-activity-received
  [target message activity state]
  (let [message-limit (get-in state [:settings :message-limit])]
    (-> state
        (append-activity-to-channel (:channel-id activity) activity)
        (drop-old-activity-from-channel (:channel-id activity) message-limit))))

(defmulti control-event
  (fn [target message args state] message))

(defmethod control-event :user-menu-toggled
  [target message args state]
  (update-in state [:settings :menus :user-menu :open] not))

(defmethod control-event :tab-selected
  [target message args state]
  (let [old-channel    (get-in state [:channels (:selected-channel state)])
        new-channel    (get-in state [:channels args])]
    (-> state
        (assoc :selected-channel args)
        (assoc-in [:channels (:id old-channel) :selected] false)
        (assoc-in [:channels args :selected] true))))

(defmethod control-event :search-form-focused
  [target message args state]
  (update-in state [:settings :forms :search] assoc :focused true))

(defmethod control-event :search-form-blurred
  [target message args state]
  (update-in state [:settings :forms :search] assoc :focused false))

(defmethod control-event :user-message-focused
  [target message args state]
  (update-in state [:settings :forms :user-message] assoc :focused true))

(defmethod control-event :user-message-blurred
  [target message args state]
  (update-in state [:settings :forms :user-message] assoc :focused false))

(defmethod control-event :user-message-updated
  [target message args state]
  (update-in state [:settings :forms :user-message] assoc :value args))

(defmethod control-event :user-message-submitted
  [target message args state]
  (if (empty? (get-in state [:settings :forms :user-message :value]))
    state
    (do
      (when-let [input (sel1 target [:.chat-input])]
        (dommy/set-value! input ""))
      (let [content    (get-in state [:settings :forms :user-message :value])
            user       (get-in state [:users (:current-user-email state)])
            channel    (get-in state [:channels (:selected-channel state)])
            activity   {:content content
                        :created_at (js/Date.)
                        :author (:email user)}]
        (-> state
            (update-in [:settings :forms :user-message] assoc :value nil)
            (update-in [:channels (:id channel) :activities] (comp (partial sort-by :created_at) conj) activity)
            (update-in [:channels (:id channel) :activities] vec))))))

(defmulti post-control-event!
  (fn [target message args previous-state current-state] message))

(defmethod post-control-event! :default
  [target message args previous-state current-state]
  (print "No post-control for: " message))

(defmethod post-control-event! :tab-selected
  [target message args previous-state current-state]
  (let [old-channel    (get-in current-state [:channels (:selected-channel current-state)])
        new-channel    (get-in current-state [:channels args])]
    (js/setTimeout #(scroll-to-latest-message! target (:id new-channel)) 35)))

(defmethod post-control-event! :user-message-submitted
  [target message args previous-state current-state]
  (let [channel (get-in current-state [:channels (:selected-channel current-state)])]
    (js/setTimeout #(scroll-to-latest-message-when-appropriate! target (:id channel)) 35)))

(defmulti post-api-event!
  (fn [target message previous-state current-state] message))

(defmethod post-api-event! :default
  [target message previous-state current-state]
  (print "No post-api handler for: " message))

(defmethod post-api-event! :channel-activity-received
  [target message activity previous-state current-state]
  (when (= (:channel-id activity) (:selected-channel current-state))
    (js/setTimeout #(scroll-to-latest-message-when-appropriate! target (:channel-id activity)) 35)))

(defn main [state]
  (let [comms (:comms @state)
        target (. js/document (getElementById "app"))]
    (om/root
     app/app
     state
     {:target target
      :opts {:comms comms}})
    (go (while true
          (alt!
           (:controls comms) ([v]
                                (let [previous-state @state]
                                  (swap! state (partial control-event target (first v) (second v)))
                                  (post-control-event! target (first v) (second v) previous-state @state)))
           (:api comms) ([v]
                           (let [previous-state @state]
                             (swap! state (partial api-event target (first v) (second v)))
                             (post-api-event! target (first v) (second v) previous-state @state))))))))

(defn setup! []
  (main app-state))

(set! (.-onload js/window) setup!)

(js/setInterval #(mock-api/random-message (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 100)
