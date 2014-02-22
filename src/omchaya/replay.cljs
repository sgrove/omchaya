(ns omchaya.replay
  "System for replaying history that's passed through communication
  channels."
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [omchaya.components.history-player :as history-player]
            [omchaya.utils :as utils])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(defmulti replay-history-step! (fn [channels-map format-version step player-control-ch]
                                 format-version))

(def player-control-ch
  (chan))

(def player-drag-ch
  (chan))

(def api-ch
  (chan))

(defn initial-player-state [app-comms player-comms]
  (atom {:replays {:replay-list   []
                   :queued-replay {:active-step 0
                                   :format_version 1}}
         :player {:position [16 16]
                  :offset   [0 0]}
         :player-comms player-comms
         :app-comms app-comms
         :state :stopped}))

(defmethod replay-history-step! 1
  [channels-map format-version step player-control-ch]
  (go
   (let [channels-map (dissoc channels-map :error)]
     (let [ch-name (first step)
           v (last step)]
       (<! (async/timeout 1000))
       (when-let [ch (get channels-map ch-name)]
         (js/console.log (pr-str ch-name) " : " (pr-str v))
         (put! ch v))))))

(defmulti player-control-event
  (fn [message args state] message))

(defmethod player-control-event :default
  [message data player-state]
  (js/console.log "No message handler for " (pr-str message)))

(defmethod player-control-event :player-started
  [message data player-state]
  (assoc player-state :state :playing))

(defmethod player-control-event :player-stopped
  [message data player-state]
  (assoc player-state :state :stopped))

(defmethod player-control-event :step-selected
  [message data player-state]
  (assoc-in player-state [:replays :queued-replay :active-step] data))

(defmethod player-control-event :replay-selected
  [message data player-state]
  (assoc-in player-state
            [:replays :queued-replay]
            (nth (get-in player-state [:replays :replay-list]) data)))

(defmulti player-drag-event
  (fn [message args state] message))

(defmethod player-drag-event :history-player-grabbed
  [message initial-mouse-pos player-state]
  (let [[mx my] initial-mouse-pos
        [px py] (get-in player-state [:player :position])
        offset [(- mx px) (- my py)]]
    (-> player-state
        (assoc-in [:player :dragging?] true)
        (assoc-in [:player :offset] offset))))

(defmethod player-drag-event :history-player-released
  [message data player-state]
  (assoc-in player-state [:player :dragging?] false))

(defmethod player-drag-event :mouse-moved
  [message mouse-position player-state]
  (if (get-in player-state [:player :dragging?])
    (let [[mx my] mouse-position
          [off-x off-y] (get-in player-state [:player :offset])
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
      (assoc-in player-state [:player :position] new-position))
    player-state))

(defmulti player-api-event
  (fn [message args state]
    message))

(defmethod player-api-event :retrieve-replays-succeeded
  [message [_ response] player-state]
  (assoc-in player-state[:replays :replay-list]
            (map #(assoc % :history (reader/read-string (:history %))) (:replays response))))

(defn start-player-loop! [player-state player-drag-ch player-control-ch step-delay]
  (let [app-comms (:app-comms @player-state)
        player-comms (:player-comms @player-state)]
    (print "1!")
    (go
     (print "2!")
     (with-redefs []
       (print "3!")
       (print "Stubbed functions for replay, replaying a v1 history")
       (loop []
         (print "O!")
         (alt!
          player-control-ch ([v]
                               (utils/log "Player control: " (pr-str v))
                               (let [[message data] v]
                                 (swap! player-state
                                        (fn [state]
                                          (player-control-event message data state)))
                                 (recur)))
          player-drag-ch ([v]
                            (let [[message data] v]
                              (swap! player-state
                                     (fn [state]
                                       (player-drag-event message data state)))
                              (recur)))
          api-ch ([v]
                    (let [[message data] v]
                      (swap! player-state (fn [state]
                                            (player-api-event message data state)))
                      (recur)))
          (async/timeout step-delay) (do
                                       (if (= (:state @player-state) :playing)
                                         (do
                                           (replay-history-step! app-comms
                                                                 1
                                                                 (nth (get-in @player-state [:replays :queued-replay :history])
                                                                      (get-in @player-state [:replays :queued-replay :active-step]))
                                                                 player-control-ch)
                                           (swap! player-state
                                                  (fn [s]
                                                    (if (= (dec (count (get-in s [:replays :queued-replay :history])))
                                                           (get-in s [:replays :queued-replay :active-step]))
                                                      (do
                                                        (-> s
                                                            (assoc-in [:replays :queued-replay :active-step] 0)
                                                            (assoc :state :stopped)))
                                                      (update-in s [:replays :queued-replay :active-step] inc))))
                                           (recur))
                                         (recur)))))))))

(defn install-player! [root-el api-key initial-state]
  (start-player-loop! initial-state player-drag-ch player-control-ch 500)
  (om/root history-player/player initial-state {:target root-el}))
