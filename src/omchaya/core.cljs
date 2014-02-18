(ns omchaya.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [omchaya.api.mock :as api]
            [omchaya.components.app :as app]
            [omchaya.datetime :as dt]
            [omchaya.mock-data :as mock-data]
            [omchaya.useful :as useful :refer [ffilter]]
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

(defmulti handle-maybe-command
  (fn [target activity state]
    (first (string/split (:content activity) #" |\n"))))

(defmethod handle-maybe-command :default
  [target activity state]
  (print "No command for " (pr-str activity)))

(defmethod handle-maybe-command "/play"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (when-let [url (or (some-> (:content activity)
                               (string/split #" ")
                               second
                               (->>
                                (re-find #"http.*\.(mp3|mp4|ogg|wav)")
                                (first)))
                       (as-> (:content activity) x
                             (string/split x #" ")
                             (second x)
                             (some #{x} ["ding" "alert"])
                             (get {"ding" "/assets/audio/ding.wav"
                                   "alert" "/assets/audio/threetone-alert.wav"} x)))]
      (put! controls-ch [:audio-player-source-updated [url (:selected-channel state)]]))
    (put! controls-ch [:audio-player-started (:channel-id activity)])))

(defmethod handle-maybe-command "/stop"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-stopped (:channel-id activity)])))

(defmethod handle-maybe-command "/pause"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-stopped (:channel-id activity)])))

(defmethod handle-maybe-command "/queue"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (when-let [url (->> (second (string/split (:content activity) #" |\n"))
                        (re-find #"http.*\.(mp3|mp4|ogg|wav)")
                        first)]
      (put! controls-ch [:playlist-entry-queued [(:channel-id activity) url]]))))

(defmethod handle-maybe-command "/mute"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-muted])))

(defmethod handle-maybe-command "/unmute"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-unmuted])))

(defn notify-if-mentioned! [activity state]
  (let [current-user (get-in state [:users (:current-user-email state)])
        comm (get-in state [:comms :controls])]
    (when (and (not= (:email current-user) (:author activity))
           (ffilter (fn [piece]
                      (let [[_ pre username post] (re-find #"(.*)@(\w+)(.*)" piece)]
                        (= username (:username current-user))))
                    (string/split (:content activity) #" ")))
      (put! comm [:current-user-mentioned [activity "/assets/audio/threetone-alert.wav"]]))))

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

(defmethod control-event :default
  [target message args state]
  (print "No control event for" (pr-str message)))

(defmethod control-event :current-user-mentioned
  [target message [activity url] state]
  (assoc-in state [:channels (:channel-id activity) :sfx :source-url] url))

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

(defmethod control-event :audio-player-started
  [target message channel-id state]
  (assoc-in state [:channels channel-id :player :state] :playing))

(defmethod control-event :audio-player-stopped
  [target message channel-id state]
  (assoc-in state [:channels channel-id :player :state] :stopped))

(defmethod control-event :audio-player-muted
  [target message args state]
  (assoc-in state [:audio :muted] true))

(defmethod control-event :audio-player-unmuted
  [target message args state]
  (assoc-in state [:audio :muted] false))

(defmethod control-event :audio-player-unmuted
  [target message args state]
  (assoc-in state [:audio :muted] false))

(defmethod control-event :audio-player-source-updated
  [target message [src channel-id] state]
  (assoc-in state [:channels channel-id :player :source-url] src))

(defmethod control-event :audio-player-unmuted
  [target message args state]
  (assoc-in state [:audio :muted] false))

(defmethod control-event :playlist-entry-queued
  [target message args state]
  (let [[channel-id url] args]
    (update-in state [:channels (:selected-channel state) :player :playlist]
               (fn [playlist]
                 (conj playlist {:order (count playlist)
                                 :src url})))))

(defmethod control-event :playlist-entry-played
  [target message src state]
  state)

(defmethod control-event :user-message-submitted
  [target message args state]
  (if (empty? (get-in state [:settings :forms :user-message :value]))
    state
    (let [content    (get-in state [:settings :forms :user-message :value])
          user       (get-in state [:users (:current-user-email state)])
          channel    (get-in state [:channels (:selected-channel state)])
          activity   {:content    content
                      :author     (:email user)
                      :created_at (js/Date.)}]
      (-> state
          (update-in [:settings :forms :user-message] assoc :value nil)
          (update-in [:channels (:id channel) :activities] (comp (partial sort-by :created_at) conj) activity)
          (update-in [:channels (:id channel) :activities] vec)))))

(def local-only-commands
  ["/mute" "unmute"])

(defn sendable-message? [message]
  (let [[command & _] (string/split message #" |\n")]
    (if (some #{command} local-only-commands)
      false
      true)))

(defmulti post-control-event!
  (fn [target message args previous-state current-state] message))

(defmethod post-control-event! :default
  [target message args previous-state current-state]
  (print "No post-control for: " message))

(defmethod post-control-event! :current-user-mentioned
  [target message args previous-state current-state]
  (print "notify current user they were mentioned"))

(defmethod post-control-event! :playlist-entry-played
  [target message args previous-state current-state]
  (let [controls-ch (get-in current-state [:comms :controls])]
    (put! controls-ch [:audio-player-source-updated args])))

(defmethod post-control-event! :audio-player-source-updated
  [target message [src channel-id] previous-state current-state]
  (when (and (= channel-id (:selected-channel current-state))
             (= (get-in current-state [:channels (:selected-channel current-state) :player :state])
                :playing))
    (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
      (js/setTimeout #(.play player) 35))))

(defmethod post-control-event! :tab-selected
  [target message args previous-state current-state]
  (let [old-channel    (get-in current-state [:channels (:selected-channel current-state)])
        new-channel    (get-in current-state [:channels args])]
    (js/setTimeout #(scroll-to-latest-message! target (:id new-channel)) 35)))

(defmethod post-control-event! :user-message-submitted
  [target message args previous-state current-state]
  (let [channel (get-in current-state [:channels (:selected-channel current-state)])
        user-message (get-in previous-state [:settings :forms :user-message :value])]
    (when-let [input (sel1 target [:.chat-input])]
      (dommy/set-value! input ""))
    (js/setTimeout #(scroll-to-latest-message-when-appropriate! target (:id channel)) 35)
    (handle-maybe-command target {:content user-message
                                  :channel-id (:id channel)} current-state)
    (when (sendable-message? user-message)
      (api/send-user-message! (:api-key current-state) user-message))))

(defmethod post-control-event! :audio-player-started
  [target message channel-id previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
    (js/setTimeout #(.play player) 35)))

(defmethod post-control-event! :audio-player-stopped
  [target message channel-id previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
    (js/setTimeout #(.pause player) 35)))

(defmethod post-control-event! :audio-player-muted
  [target message args previous-state current-state]
  (let [players (sel target :.audio-player)]
    (js/setTimeout #(doseq [player players]
                      (set! (.-muted player) true)) 35)))

(defmethod post-control-event! :audio-player-unmuted
  [target message args previous-state current-state]
  (let [players (sel target :.audio-player)]
    (js/setTimeout #(doseq [player players]
                      (set! (.-muted player) false)) 35)))

(defmethod post-control-event! :current-user-mentioned
  [target message [activity url] previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.sfx.audio-" (:channel-id activity))])]
    (js/setTimeout #(.play player) 35)))

(defmulti post-api-event!
  (fn [target message previous-state current-state] message))

(defmethod post-api-event! :default
  [target message previous-state current-state]
  (print "No post-api handler for: " message))

(defmethod post-api-event! :channel-activity-received
  [target message activity previous-state current-state]
  (when (= (:channel-id activity) (:selected-channel current-state))
    (js/setTimeout #(scroll-to-latest-message-when-appropriate! target (:channel-id activity)) 35)
    (when (or (:live? activity) true)
      (handle-maybe-command target activity current-state)
      (notify-if-mentioned! activity current-state))))

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
                                (print (pr-str v))
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

(defn ^:expore send-async-message [ch-name message data]
  (put! (get-in @app-state [:comms (keyword ch-name)]) [(keyword message) (js->clj data :keywordize-keys true)]))

(js/setInterval #(api/random-message (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 10000)
