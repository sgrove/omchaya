(ns omchaya.controllers.post-controls
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [cljs.reader :as reader]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [omchaya.api.mock :as api]
            [omchaya.commands :as commands]
            [omchaya.replay :as replay]
            [omchaya.routes :as routes]
            [omchaya.ui :as imp-ui]
            [omchaya.useful :as useful :refer [ffilter]]
            [omchaya.utils :as utils :refer [mprint]])
  (:use-macros [dommy.macros :only [sel sel1]]))

(def local-only-commands
  ["/mute" "/unmute"])

(defn sendable-message? [message]
  (let [[command & _] (string/split message #" |\n")]
    (if (or (some #{command} local-only-commands)
            (empty? message))
      false
      true)))

(defmulti post-control-event!
  (fn [target message args previous-state current-state] message))

(defmethod post-control-event! :default
  [target message args previous-state current-state]
  (mprint "No post-control for: " message))

(defmethod post-control-event! :current-user-mentioned
  [target message args previous-state current-state]
  (mprint "notify current user they were mentioned"))

(defmethod post-control-event! :playlist-entry-played
  [target message [order channel-id] previous-state current-state]
  (let [controls-ch (get-in current-state [:comms :controls])
        playlist (get-in current-state [:channels channel-id :player :playlist])
        entry (ffilter #(= (:order %) order) (get-in current-state [:channels channel-id :player :playlist]))]
    (put! controls-ch [:audio-player-source-updated [(:src entry) channel-id]])))

(defmethod post-control-event! :audio-player-source-updated
  [target message [src channel-id] previous-state current-state]
  (when (and (= channel-id (:selected-channel current-state))
             (= (get-in current-state [:channels (:selected-channel current-state) :player :state])
                :playing))
    (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
      (js/setTimeout #(.play player) 35))))

(defmethod post-control-event! :tab-selected
  [target message channel-id previous-state current-state]
  (utils/set-window-href! (routes/v1-channel-link {:channel-id channel-id}))
  (when-let [new-channel (get-in current-state [:channels channel-id])]
    (js/setTimeout #(imp-ui/scroll-to-latest-message! target (:id new-channel)) 35)))

(defmethod post-control-event! :user-message-submitted
  [target message args previous-state current-state]
  (let [channel (get-in current-state [:channels (:selected-channel current-state)])
        user-message (get-in previous-state [:settings :forms :user-message :value])
        content    (get-in previous-state [:settings :forms :user-message :value])
        user       (get-in current-state [:users (:current-user-email current-state)])
        channel    (get-in current-state [:channels (:selected-channel current-state)])
        api-key    (:api-key user)
        activity   {:content    content
                    :author     (:email user)
                    :created_at (js/Date.)
                    :channel-id (:id channel)}]
    (when-let [input (sel1 target [:.chat-input])]
      (dommy/set-value! input ""))
    (js/setTimeout #(imp-ui/scroll-to-latest-message-when-appropriate! target (:id channel)) 35)
    (commands/handle-maybe-command target {:content user-message
                                           :channel-id (:id channel)} current-state)
    (when (sendable-message? user-message)
      (api/send-user-message! api-key activity))))

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

(defmethod post-control-event! :user-logged-out
  [target message [activity url] previous-state current-state]
  (mprint "Log the user out somehow"))

(defmethod post-control-event! :history-player-opened
  [target message [activity url] previous-state current-state]
  (when-let [player-el (sel1 :div#player-container)]
    (replay/install-player! player-el (get-in current-state [:users (:current-user-email current-state) :api-key])
                            (replay/initial-player-state (:comms current-state)
                                                         {:player-control replay/player-control-ch
                                                          :player-drag    replay/player-drag-ch
                                                          :api replay/api-ch}))))

(defmethod post-control-event! :search-field-focused
  [target message [activity url] previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    ;; Really unpleasant, but handles the bug where the input field is rendered blank when re-focused
    (.setTimeout js/window
                 #(set! (.-value search-field) (get-in current-state [:settings :forms :search :value]))
                 20)))

(defmethod post-control-event! :search-focus-key-pressed
  [target message args previous-state current-state]
  (let [message-input-focused? (get-in current-state [:settings :forms :user-message :focused])]
    (when-let [search-field (and (not message-input-focused?)
                                 (sel1 [target :input.query]))]
      (.focus search-field))))

(defmethod post-control-event! :blur-current-field-key-pressed
  [target message args previous-state current-state]
  (let [message-input-focused? (get-in current-state [:settings :forms :user-message :focused])
        search-input-focused?  (get-in current-state [:settings :forms :search :focused])]
    (cond
     message-input-focused? (put! (get-in current-state [:comms :controls]) [:user-message-blur-key-pressed])
     search-input-focused?  (put! (get-in current-state [:comms :controls]) [:search-form-blur-key-pressed]))))

(defmethod post-control-event! :search-form-blur-key-pressed
  [target message args previous-state current-state]
  (when-let [message-field (sel1 [target :textarea.chat-input])]
    (.focus message-field)))

(defmethod post-control-event! :user-message-blur-key-pressed
  [target message args previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    (.focus search-field)))

(defmethod post-control-event! :channel-destroyed
  [target message channel-id previous-state current-state]
  (api/destroy-channel! (get-in current-state [:comms :api]) channel-id))

(defmethod post-control-event! :state-restored
  [target message channel-id previous-state current-state]
  (when (empty? (.getItem js/localStorage "omchaya-state"))
    (print "No data available to load from localStorage")))

(defmethod post-control-event! :state-persisted
  [target message channel-id previous-state current-state]
  (.setItem js/localStorage "omchaya-state" (pr-str (dissoc current-state :comms))))

(defmethod post-control-event! :window-resized
  [target message channel-id previous-state current-state]
  ;; Figure out re-layout code here
  )

(defmethod post-control-event! :inspector-path-update-requested
  [target message channel-id previous-state current-state]
  (let [inspector-path-s (pr-str (get-in current-state [:settings :inspector :path]))
        path-string (js/prompt "New path (must be edn-compatible)"
                               inspector-path-s)]
    (try
      (put! (get-in current-state [:comms :controls]) [:inspector-path-updated (reader/read-string path-string)])
      (catch js/Error e
        (mprint "Not edn-compatible: " path-string)))))

(defmethod post-control-event! :about-opened
  [target message channel-id previous-state current-state]
  (js/window.open "https://github.com/sgrove/omchaya"))
