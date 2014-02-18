(ns omchaya.controllers.controls
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]))

(defmulti control-event
  (fn [target message args state] message))

(defmethod control-event :default
  [target message args state]
  state)

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
  (assoc-in state [:settings :forms :search :focused] true))

(defmethod control-event :search-form-blurred
  [target message args state]
  (assoc-in state [:settings :forms :search :focused] false))

(defmethod control-event :search-form-updated
  [target message new-value state]
  (assoc-in state [:settings :forms :search :value] new-value))

(defmethod control-event :user-message-focused
  [target message args state]
  (assoc-in state [:settings :forms :user-message :focused] true))

(defmethod control-event :user-message-blurred
  [target message args state]
  (assoc-in state [:settings :forms :user-message :focused] false))

(defmethod control-event :user-message-updated
  [target message args state]
  (assoc-in state [:settings :forms :user-message :value] args))

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
          (assoc-in [:settings :forms :user-message :value] nil)
          (update-in [:channels (:id channel) :activities] (comp (partial sort-by :created_at) conj) activity)
          (update-in [:channels (:id channel) :activities] vec)))))

(defmethod control-event :settings-opened
  [target message args state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod control-event :help-opened
  [target message args state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod control-event :about-opened
  [target message args state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod control-event :user-logged-out
  [target message args state]
  (assoc-in state [:settings :menus :user-menu :open] false)
  (assoc-in state [:current-user-email] nil))
