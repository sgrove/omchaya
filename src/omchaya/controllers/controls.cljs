(ns omchaya.controllers.controls
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [cljs.reader :as reader]
            [omchaya.macros :as macros :include-macros true]
            [omchaya.utils :as utils :refer [mprint]])
  (:use-macros [omchaya.macros :only [defaction]]))

(defmulti control-event
  (fn [target message args state] message))

(defaction control-event :default
  [target message args state]
  {}
  (mprint "Unknown controls: " (pr-str message))
  nil)

(defaction control-event :api-key-updated
  [target message api-key state]
  {:out {:api-key {:path [:settings :current-user :api-key]}}}
  {:api-key api-key})

(defaction control-event :current-user-mentioned
  [target message [activity url] state]
  {:out {:sfx-source-url {:path [:channels (:channel-id activity) :sfx :source-url]}}}
  {:sfx-source-url url})

(defaction control-event :user-menu-toggled
  [target message args state]
  {:in  [open? {:path [:settings :menus :user-menu :open]}]
   :out {:open? {:path [:settings :menus :user-menu :open]}}}
  {:open? (not open?)})

(defaction control-event :tab-selected
  [target message args state]
  {:in [selected-channel {:path [:selected-channel]}]
   :out {:new-selected-channel {:path [:selected-channel]}
         :old-channel-selected {:path [:channels selected-channel :selected]}
         :new-channel-selected {:path [:channels args :selected]}}}
  {:new-selected-channel args
   :old-channel-selected false
   :new-channel-selected true})

(defaction control-event :search-form-focused
  [target message args state]
  {:out {:focused? {:path [:settings :forms :search :focused]}}}
  {:focused? true})

(defaction control-event :search-form-blurred
  [target message args state]
  {:out {:focused? {:path [:settings :forms :search :focused]}}}
  {:focused? false})

(defaction control-event :search-form-updated
  [target message new-value state]
  {:out {:form-value {:path [:settings :forms :search :value]}}}
  {:form-value new-value})

(defaction control-event :user-message-focused
  [target message args state]
  {:out {:focused? {:path [:settings :forms :user-message :focused]}}}
  {:focused? true})

(defaction control-event :user-message-blurred
  [target message args state]
  {:out {:focused? {:path [:settings :forms :user-message :focused]}}}
  {:focused? false})

(defaction control-event :user-message-updated
  [target message args state]
  {:out {:message-value {:path [:settings :forms :user-message :value]}}}
  {:message-value args})

(defaction control-event :audio-player-started
  [target message channel-id state]
  {:out {:player-state {:path [:channels channel-id :player :state]}}}
  {:player-state :playing})

(defaction control-event :audio-player-stopped
  [target message channel-id state]
  {:out {:player-state {:path [:channels channel-id :player :state]}}}
  {:player-state :stopped})

(defaction control-event :audio-player-muted
  [target message args state]
  {:out {:muted? {:path [:audio :muted]}}}
  {:muted? true})

(defaction control-event :audio-player-unmuted
  [target message args state]
  {:out {:muted? {:path [:audio :muted]}}}
  {:muted? false})

(defaction control-event :audio-player-source-updated
  [target message [src channel-id] state]
  {:out {:source-url {:path [:channels channel-id :player :source-url]}}}
  {:source-url src})

(defaction control-event :playlist-entry-queued
  [target message [channel-id url] state]
  {:in  [playlist  {:path [:channels channel-id :player :playlist]}]
   :out {:playlist {:path [:channels channel-id :player :playlist]}}}
  {:playlist (conj playlist {:order (inc (count playlist))
                             :src url})})

(defaction control-event :playlist-entry-played
  [target message [order channel-id] state]
  {:out {:playing-order {:path [:channels channel-id :player :playing-order]}
         :loading {:path [:channels channel-id :player :loading]}}}
  {:playing-order order
   :loading true})

(defaction control-event :user-message-submitted
  [target message args state]
  {:in [current-user-email {:path [:current-user-email]}
        selected-channel   {:path [:selected-channel]}
        current-user-msg   {:path [:settings :forms :user-message :value]}
        content            {:path [:settings :forms :user-message :value]}
        user               {:path [:users current-user-email]}
        channel            {:path [:channels selected-channel]}
        activities         {:path [:channels (:id channel) :activities]}]
   :out {:user-message {:path [:settings :forms :user-message :value]}
         :activities {:path [:channels (:id channel) :activities]}}}
  (if (empty? current-user-msg)
    {}
    (let [activity   {:content    content
                      :author     (:email user)
                      :created_at (js/Date.)}
          activities (->> activity
                           (conj activities)
                           (sort-by :created_at)
                           vec)]
      {:user-message nil
       :activities activities})))

(defaction control-event :user-logged-out
  [target message args state]
  {:out {:menu-open? {:path [:settings :menus :user-menu :open]}
         :user-email {:path [:current-user-email]}}}
  {:menu-open? false
   :user-email nil})

(defaction control-event :about-opened
  [target message args state]
  ;; TODO: Figure out how to make menu-closing more modular
  {:out {:menu-open? {:path [:settings :menus :user-menu :open]}}}
  {:menu-open? false})

(defaction control-event :audio-source-loaded
  [target message channel-id state]
  {:out {:player-loading? {:path [:channels channel-id :player :loading]}}}
  {:player-loading? false})

(defaction control-event :channel-destroyed
  [target message channel-id state]
  {:out {:player-loading? {:path [:channels channel-id :loading]}}}
  {:player-loading true})

(defaction control-event :sidebar-toggled
  [target message sidebar-id state]
  {:in  [sidebar-open?  {:path [:settings :sidebar sidebar-id :open]}]
   :out {:sidebar-open? {:path [:settings :sidebar sidebar-id :open]}}}
  {:sidebar-open? (not sidebar-open?)})

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

(defaction control-event :draggable
  [target message [sub-message {:keys [name position]}] state]
  {:in  [window-state  {:path [:windows name]}]
   :out {:window-state {:path [:windows name]}}}
  {:window-state (window-drag-event sub-message position window-state)})

(defaction control-event :toggle-inspector-key-pressed
  [target message args state]
  {:in  [open?  {:path [:windows :window-inspector :open]}]
   :out {:open? {:path [:windows :window-inspector :open]}}}
  {:open? (not open?)})

(defaction control-event :search-focus-key-pressed
  [target message args state]
  {:in  [message-input-focused?  {:path [:settings :forms :user-message :focused]}
         search-input-focused?   {:path [:settings :forms :search :focused]}]
   :out {:open? {:path [:windows :window-inspector :open]}}}
  {:open? (not open?)})

(defaction control-event :inspector-path-updated
  [target message path state]
  {:out {:path {:path [:settings :inspector :path]}}}
  {:path path})

(defaction control-event :state-restored
  [target message path state]
  {:out {:replaced-state {:path []}}}
  {:replaced-state (let [str-data (.getItem js/localStorage "omchaya-state")]
                     (if (seq str-data)
                       (-> str-data
                           reader/read-string
                           (assoc :comms (:comms state)))
                       state))})
