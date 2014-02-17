(ns omchaya.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [dommy.core :as dommy]
            [omchaya.components.sandbox :as sandbox]
            [omchaya.datetime :as dt]
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

(def user-emails
  ["sean@bushi.do" "nb@bushi.do" "sacha@bushi.do"])

(defn random-message [channel-id]
  (let [at (as-> (js/Date.) x
                 (.getTime x)
                 (- x (rand-int (* 1000 60 24 60)))
                 (js/Date. x))]
    {:created_at at
     :author (rand-nth user-emails)
     :content (rand-nth ["deployed with ruby on...?"
                         "ha, dat stuff works"
                         "Random content"
                         "@sgrove how're you?"
                         "@sacha Be careful with that"
                         "Hey @nb - I got you something nice... (not really)"])
     :channel-id channel-id}))

(defn random-title []
  (rand-nth ["Background"
             "A dark place"
             "한국어"
             "Zork lovers"]))

(def media
  [{:src "/system/attachments/files/000/000/098/original/call-centre-woman.jpg?1392265218"
    :name "call-centre-woman.jpg"}
   {:src "/system/attachments/files/000/000/098/original/design.pdf?1392265218"
    :name "design.pdf"}
   {:src "/system/attachments/files/000/000/098/original/example.mp3?1392265218"
    :name "example.mp3"}])

(defn random-channel [order & [title]]
  (let [title (or title (random-title))]
    {:id (utils/safe-sel title)
     :order order
     :title title
     :selected false
     :users (take (inc (rand-int (count user-emails))) (shuffle user-emails))
     :activities (vec
                  (sort-by :created_at (repeatedly (inc (rand-int 10))
                                                   #(random-message (utils/safe-sel title)))))
     :media (vec
             (take (inc (rand-int 10))
                   (shuffle media)))}))

(defn initial-state []
  (let [channels (as-> (map (comp (juxt :id identity) random-channel) (range 2 8)) ch
                       (into {} ch))]
    {:settings {:forms {:search {:focused false}
                        :user-message {:focused false}}
                :menus {:user-menu {:open false}}}
     :selected-channel "lobby"
     :channels (as-> channels ch
                     (assoc ch "lobby" (random-channel 1 "Lobby"))
                     (update-in ch ["lobby"] assoc :selected true))
     :users {"sean@bushi.do" {:full-name "Sean Grove"
                              :email "sean@bushi.do"
                              :username "sgrove"}
             "nb@bushi.do" {:full-name "Nathan Broadbent"
                            :email "nb@bushi.do"
                            :username "nb"}
             "sacha@bushi.do" {:full-name "Sacha Greif"
                               :email "sacha@bushi.do"
                               :username "sacha"}}
     :current-user-email "sean@bushi.do"
     :comms {:controls controls-ch
             :api api-ch}}))

(def app-state
  (atom (initial-state)))

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

(defmulti api-event
  (fn [target message args state] message))

(defmethod api-event :channel-activity-received
  [target message activity state]
  (when (= (:channel-id activity) (:selected-channel state))
    (js/setTimeout #(scroll-to-latest-message-when-appropriate! target (:channel-id activity)) 35))
  (update-in state [:channels (:channel-id activity) :activities] (comp (partial sort-by :created_at) conj) activity))

(defmulti control-event
  (fn [target message args state] message))

(defmethod control-event :user-menu-toggled
  [target message args state]
  (update-in state [:settings :menus :user-menu :open] not))

(defmethod control-event :tab-selected
  [target message args state]
  (let [old-channel    (get-in state [:channels (:selected-channel state)])
        new-channel    (get-in state [:channels args])]
    (js/setTimeout #(scroll-to-latest-message! target (:id new-channel)) 35)
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
        (js/setTimeout #(scroll-to-latest-message-when-appropriate! target (:id channel)) 35)
        (-> state
            (update-in [:settings :forms :user-message] assoc :value nil)
            (update-in [:channels (:id channel) :activities] (comp (partial sort-by :created_at) conj) activity)
            (update-in [:channels (:id channel) :activities] vec))))))

(defn main [state]
  (let [comms (:comms @state)
        target (. js/document (getElementById "app"))]
    (om/root
     sandbox/sandbox
     state
     {:target target
      :opts {:comms comms}})
    (go (while true
          (alt!
           (:controls comms) ([v]
                                (swap! state (partial control-event target (first v) (second v))))
           (:api comms) ([v]
                           (swap! state (partial api-event target (first v) (second v)))))))))

(main app-state)

(js/setInterval #(put! (get-in @app-state [:comms :api]) [:channel-activity-received (random-message (rand-nth (keys (:channels @app-state))))]) 1000)
