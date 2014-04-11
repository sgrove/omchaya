(ns omchaya.controllers.api
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [omchaya.macros :as macros :include-macros true])
  (:use-macros [omchaya.macros :only [defaction]]))

(defn append-activity-to-channel [activities activity]
  (->> activity
       (conj activities)
       (sort-by :created_at)))

(defn drop-old-activity-from-channel [activities message-limit]
  (take-last message-limit activities))

(defmulti api-event
  (fn [target message args state] message))

(defaction api-event :channel-activity-received
  [target message activity state]
  {:in [message-limit {:path [:settings :message-limit]}
        activities {:path [:channels (:channel-id activity) :activities]}]
   :out {:activities {:path [:channels (:channel-id activity) :activities]}}}
  {:activities (-> activities
                   (append-activity-to-channel activity)
                   (drop-old-activity-from-channel message-limit)
                   vec)})

(defaction api-event :channel-remotely-destroyed
  [target message channel-id state]
  {:in  [channels  {:path [:channels]}]
   :out {:channels {:path [:channels]}}}
  {:channels (dissoc channels channel-id)})
