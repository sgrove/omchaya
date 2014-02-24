(ns omchaya.controllers.controls
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [omchaya.utils :as utils :refer [mprint]]))

(defmulti control-event
  (fn [target message args state] message))

(defmethod control-event :default
  [target message args state]
  (mprint "Unknown controls: " (pr-str message))
  state)

(defmethod control-event :api-key-updated
  [target message api-key state]
  (assoc-in state [:users (:current-user-email state) :api-key] api-key))

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
    (update-in state [:channels channel-id :player :playlist]
               (fn [playlist]
                 (conj playlist {:order (inc (count playlist))
                                 :src url})))))

(defmethod control-event :playlist-entry-played
  [target message [order channel-id] state]
  (-> state
      (assoc-in [:channels channel-id :player :playing-order] order)
      (assoc-in [:channels channel-id :player :loading] true)))

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
  (-> state
      (assoc-in [:settings :menus :user-menu :open] false)
      (assoc-in [:current-user-email] nil)))

(defmethod control-event :audio-source-loaded
  [target message channel-id state]
  (assoc-in state [:channels channel-id :player :loading] false))

(defmethod control-event :channel-destroyed
  [target message channel-id state]
  (assoc-in state [:channels channel-id :loading] true))

(defmethod control-event :right-sidebar-toggled
  [target message channel-id state]
  (update-in state [:settings :sidebar :right :open] not))

(defmethod control-event :left-sidebar-toggled
  [target message channel-id state]
  (update-in state [:settings :sidebar :left :open] not))

(defmulti window-drag-event
  (fn [message args state] message))

(defmethod window-drag-event :grabbed
  [message initial-mouse-pos window-state]
  (let [[mx my] initial-mouse-pos
        [px py] (:position window-state)
        offset [(- mx px) (- my py)]]
    (assoc window-state
      :dragging? true
      :offset offset)))

(defmethod window-drag-event :released
  [message data window-state]
  (assoc window-state :dragging? false))

(defmethod window-drag-event :mouse-moved
  [message mouse-position window-state]
  (if (:dragging? window-state)
    (let [[mx my] mouse-position
          [off-x off-y] (:offset window-state)
          [tnx tny] [(- mx off-x) (- my off-y)]
          min-x -150
          max-x (- (.-clientWidth js/document.body) 50)
          min-y 0
          max-y (- (.-clientHeight js/document.body) 50)
          new-position [(cond
                         (> min-x tnx) min-x
                         (> tnx max-x) max-x
                         :else tnx)
                        (cond
                         (> min-y tny) min-y
                         (> tny max-y) max-y
                         :else tny)]]
      (assoc window-state :position new-position))
    window-state))

(defmethod control-event :draggable
  [target message [sub-message {:keys [name] :as args}] state]
  (update-in state [:windows name]
             #(window-drag-event sub-message (:position args) %)))

(defmethod control-event :toggle-inspector-key-pressed
  [target message args state]
  (update-in state [:windows :window-inspector :open] not))

(defmethod control-event :inspector-path-updated
  [target message path state]
  (assoc-in state [:settings :inspector :path] path))
