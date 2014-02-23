(ns omchaya.controllers.api
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]))

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

(defmethod api-event :channel-remotely-destroyed
  [target message channel-id state]
  (update-in state [:channels] dissoc channel-id))
