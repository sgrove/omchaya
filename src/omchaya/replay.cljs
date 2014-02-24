(ns omchaya.replay
  "System for replaying history that's passed through communication
  channels."
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [omchaya.components.history-player :as history-player]
            [omchaya.api.kandan.callbacks :as kandan-cb]
            [omchaya.utils :as utils :refer [mprint]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(def example-replay
  (reader/read-string "[[:controls [:tab-selected \"1\"]] [:controls [:api-key-updated \"isQgo1DvsegpyQ9Sq9ys\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"E\"]] [:controls [:user-message-updated \"E\"]] [:controls [:user-message-updated \"Ex\"]] [:controls [:user-message-updated \"Exam\"]] [:controls [:user-message-updated \"Examp\"]] [:controls [:user-message-updated \"Exampl\"]] [:controls [:user-message-updated \"Example\"]] [:controls [:user-message-updated \"Example\"]] [:controls [:user-message-updated \"Example \"]] [:controls [:user-message-updated \"Example i\"]] [:controls [:user-message-updated \"Example in\"]] [:controls [:user-message-updated \"Example inp\"]] [:controls [:user-message-updated \"Example inpu\"]] [:controls [:user-message-updated \"Example input\"]] [:controls [:user-message-submitted]] [:controls [:user-message-updated \"W\"]] [:controls [:user-message-updated \"W\"]] [:controls [:user-message-updated \"Wa\"]] [:controls [:user-message-updated \"Wat\"]] [:controls [:user-message-updated \"Watch\"]] [:controls [:user-message-updated \"Watch\"]] [:controls [:user-message-updated \"Watch \"]] [:controls [:user-message-updated \"Watch me\"]] [:controls [:user-message-updated \"Watch me \"]] [:controls [:user-message-updated \"Watch me \"]] [:controls [:user-message-updated \"Watch me no\"]] [:controls [:user-message-updated \"Watch me now\"]] [:controls [:user-message-updated \"Watch me now\"]] [:controls [:user-message-submitted]] [:controls [:user-message-blurred]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pla\"]] [:controls [:user-message-updated \"/play\"]] [:controls [:user-message-updated \"/play \"]] [:controls [:user-message-updated \"/play https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\"]] [:controls [:user-message-submitted]] [:controls [:audio-player-source-updated [\"https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\" \"1\"]]] [:controls [:audio-player-started \"1\"]] [:controls [:user-message-blurred]] [:controls [:audio-player-stopped \"1\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pla\"]] [:controls [:user-message-updated \"/play\"]] [:controls [:user-message-updated \"/pla\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/p\"]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/q\"]] [:controls [:user-message-updated \"/qu\"]] [:controls [:user-message-updated \"/que\"]] [:controls [:user-message-updated \"/queu\"]] [:controls [:user-message-updated \"/queue\"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue https://dl.dropboxusercontent.com/u/412963/moresoldiers.mp3\"]] [:controls [:user-message-submitted]] [:controls [:playlist-entry-queued [\"1\" \"https://dl.dropboxusercontent.com/u/412963/moresoldiers.mp3\"]]] [:controls [:user-message-blurred]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"O\"]] [:controls [:user-message-updated \"O\"]] [:controls [:user-message-updated \"Ok\"]] [:controls [:user-message-updated \"Ok,\"]] [:controls [:user-message-updated \"Ok, \"]] [:controls [:user-message-updated \"Ok, an\"]] [:controls [:user-message-updated \"Ok, ano\"]] [:controls [:user-message-updated \"Ok, anot\"]] [:controls [:user-message-updated \"Ok, anot\"]] [:controls [:user-message-updated \"Ok, anothe\"]] [:controls [:user-message-updated \"Ok, another \"]] [:controls [:user-message-updated \"Ok, another \"]] [:controls [:user-message-updated \"Ok, another \"]] [:controls [:user-message-updated \"Ok, another on\"]] [:controls [:user-message-updated \"Ok, another one\"]] [:controls [:user-message-updated \"Ok, another one\"]] [:controls [:user-message-updated \"Ok, another one.\"]] [:controls [:user-message-updated \"Ok, another one..\"]] [:controls [:user-message-updated \"Ok, another one...\"]] [:controls [:user-message-submitted]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/q\"]] [:controls [:user-message-updated \"/qu\"]] [:controls [:user-message-updated \"/que\"]] [:controls [:user-message-updated \"/queue\"]] [:controls [:user-message-updated \"/queue\"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3\"]] [:controls [:user-message-submitted]] [:controls [:playlist-entry-queued [\"1\" \"https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3\"]]] [:controls [:user-message-blurred]] [:controls [:playlist-entry-played [1 \"1\"]]] [:controls [:audio-player-source-updated [\"https://dl.dropboxusercontent.com/u/412963/moresoldiers.mp3\" \"1\"]]] [:controls [:audio-player-started \"1\"]] [:controls [:audio-player-stopped \"1\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"q\"]] [:controls [:user-message-updated \"que\"]] [:controls [:user-message-updated \"que\"]] [:controls [:user-message-updated \"queue\"]] [:controls [:user-message-updated \"queue\"]] [:controls [:user-message-updated \"queue \"]] [:controls [:user-message-updated \"queue \"]] [:controls [:user-message-updated \"queue \"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\"]] [:controls [:user-message-submitted]] [:controls [:playlist-entry-queued [\"1\" \"https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\"]]] [:controls [:user-message-blurred]] [:controls [:playlist-entry-played [3 \"1\"]]] [:controls [:audio-player-source-updated [\"https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\" \"1\"]]] [:controls [:audio-player-started \"1\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"(\"]] [:controls [:user-message-updated \"(\"]] [:controls [:user-message-updated \"(no\"]] [:controls [:user-message-updated \"(not\"]] [:controls [:user-message-updated \"(not\"]] [:controls [:user-message-updated \"(notb\"]] [:controls [:user-message-updated \"(notbad\"]] [:controls [:user-message-updated \"(notbad\"]] [:controls [:user-message-updated \"(notbad)\"]] [:controls [:user-message-updated \"(notbad)\"]] [:controls [:user-message-submitted]] [:controls [:user-message-blurred]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"A\"]] [:controls [:user-message-updated \"A\"]] [:controls [:user-message-updated \"\"]] [:controls [:user-message-updated \"@\"]] [:controls [:user-message-updated \"@\"]] [:controls [:user-message-updated \"@\"]] [:controls [:user-message-updated \"@n\"]] [:controls [:user-message-updated \"@nb\"]] [:controls [:user-message-updated \"@nb \"]] [:controls [:user-message-updated \"@nb he\"]] [:controls [:user-message-updated \"@nb her\"]] [:controls [:user-message-updated \"@nb here\"]] [:controls [:user-message-updated \"@nb here'\"]] [:controls [:user-message-updated \"@nb here'\"]] [:controls [:user-message-updated \"@nb here's\"]] [:controls [:user-message-updated \"@nb here's \"]] [:controls [:user-message-updated \"@nb here's a \"]] [:controls [:user-message-updated \"@nb here's a \"]] [:controls [:user-message-updated \"@nb here's a g\"]] [:controls [:user-message-updated \"@nb here's a go\"]] [:controls [:user-message-updated \"@nb here's a good\"]] [:controls [:user-message-updated \"@nb here's a good\"]] [:controls [:user-message-updated \"@nb here's a good \"]] [:controls [:user-message-updated \"@nb here's a good e\"]] [:controls [:user-message-updated \"@nb here's a good ep\"]] [:controls [:user-message-updated \"@nb here's a good epi\"]] [:controls [:user-message-updated \"@nb here's a good epis\"]] [:controls [:user-message-updated \"@nb here's a good episo\"]] [:controls [:user-message-updated \"@nb here's a good episode\"]] [:controls [:user-message-updated \"@nb here's a good episode \"]] [:controls [:user-message-updated \"@nb here's a good episode \"]] [:controls [:user-message-updated \"@nb here's a good episode of\"]] [:controls [:user-message-updated \"@nb here's a good episode of \"]] [:controls [:user-message-updated \"@nb here's a good episode of \"]] [:controls [:user-message-updated \"@nb here's a good episode of M\"]] [:controls [:user-message-updated \"@nb here's a good episode of MT\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW f\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW fo\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for y\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you http://www.youtube.com/watch?v=utv1la0q5ao\"]] [:controls [:user-message-submitted]] [:controls [:user-message-updated \"H\"]] [:controls [:user-message-updated \"H\"]] [:controls [:user-message-updated \"Hop\"]] [:controls [:user-message-updated \"Hop\"]] [:controls [:user-message-updated \"Hope\"]] [:controls [:user-message-updated \"Hope \"]] [:controls [:user-message-updated \"\"]] [:controls [:user-message-updated \"\"]] [:controls [:user-message-updated \"I\"]] [:controls [:user-message-updated \"I\"]] [:controls [:user-message-updated \"I'\"]] [:controls [:user-message-updated \"I'm\"]] [:controls [:user-message-updated \"I'm \"]] [:controls [:user-message-updated \"I'm su\"]] [:controls [:user-message-updated \"I'm su\"]] [:controls [:user-message-updated \"I'm sure \"]] [:controls [:user-message-updated \"I'm sure \"]] [:controls [:user-message-updated \"I'm sure \"]] [:controls [:user-message-updated \"I'm sure y\"]] [:controls [:user-message-updated \"I'm sure you\"]] [:controls [:user-message-updated \"I'm sure you\"]] [:controls [:user-message-updated \"I'm sure you'\"]] [:controls [:user-message-updated \"I'm sure you'l\"]] [:controls [:user-message-updated \"I'm sure you'll\"]] [:controls [:user-message-updated \"I'm sure you'll \"]] [:controls [:user-message-updated \"I'm sure you'll l\"]] [:controls [:user-message-updated \"I'm sure you'll lo\"]] [:controls [:user-message-updated \"I'm sure you'll l\"]] [:controls [:user-message-updated \"I'm sure you'll li\"]] [:controls [:user-message-updated \"I'm sure you'll like\"]] [:controls [:user-message-updated \"I'm sure you'll like \"]] [:controls [:user-message-updated \"I'm sure you'll like \"]] [:controls [:user-message-updated \"I'm sure you'll like i\"]] [:controls [:user-message-updated \"I'm sure you'll like it \"]] [:controls [:user-message-updated \"I'm sure you'll like it \"]] [:controls [:user-message-updated \"I'm sure you'll like it :\"]] [:controls [:user-message-updated \"I'm sure you'll like it :\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+!\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+!\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+1\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+1:\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+1:\"]] [:controls [:user-message-submitted]] [:controls [:user-message-blurred]] [:controls [:audio-player-stopped \"1\"]]]"))

(defmulti replay-history-step! (fn [channels-map format-version step player-control-ch]
                                 format-version))

(def player-control-ch
  (chan))

(def player-drag-ch
  (chan))

(def api-ch
  (chan))

(defn initial-player-state [app-comms player-comms]
  (atom {:replays {:replay-list   [{:history example-replay
                                    :name "Example replay"
                                    :format_version 1}]
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
  (assoc-in player-state [:replays :replay-list]
            (map #(assoc % :history (reader/read-string (:history %))) (:replays response))))

(defn start-player-loop! [player-state player-drag-ch player-control-ch step-delay]
  (let [app-comms (:app-comms @player-state)
        player-comms (:player-comms @player-state)]
    (go
     (with-redefs [kandan-cb/send-user-message! #(mprint "Stubbed fn called!")]
       (mprint "Stubbed functions for replay, replaying a v1 history")
       (loop []
         (alt!
          player-control-ch ([v]
                               (mprint "Player control: " (pr-str v))
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
                    (mprint "API control: " (pr-str v))
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
  (start-player-loop! initial-state player-drag-ch player-control-ch 100)
  (om/root history-player/player initial-state {:target root-el}))
