(ns omchaya.controllers.post-controls
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [omchaya.api.mock :as api]
            [omchaya.commands :as commands]
            [omchaya.ui :as imp-ui]
            [omchaya.useful :as useful :refer [ffilter]])
  (:use-macros [dommy.macros :only [sel sel1]]))

(def local-only-commands
  ["/mute" "/unmute"])

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
  [target message args previous-state current-state]
  (let [old-channel    (get-in current-state [:channels (:selected-channel current-state)])
        new-channel    (get-in current-state [:channels args])]
    (js/setTimeout #(imp-ui/scroll-to-latest-message! target (:id new-channel)) 35)))

(defmethod post-control-event! :user-message-submitted
  [target message args previous-state current-state]
  (let [channel (get-in current-state [:channels (:selected-channel current-state)])
        user-message (get-in previous-state [:settings :forms :user-message :value])]
    (when-let [input (sel1 target [:.chat-input])]
      (dommy/set-value! input ""))
    (js/setTimeout #(imp-ui/scroll-to-latest-message-when-appropriate! target (:id channel)) 35)
    (commands/handle-maybe-command target {:content user-message
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

(defmethod post-control-event! :user-logged-out
  [target message [activity url] previous-state current-state]
  (print "Log the user out somehow"))
