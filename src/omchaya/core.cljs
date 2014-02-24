(ns omchaya.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [omchaya.api.mock :as api]
            [omchaya.components.app :as app]
            [omchaya.controllers.controls :as controls-con]
            [omchaya.controllers.post-controls :as controls-pcon]
            [omchaya.controllers.api :as api-con]
            [omchaya.controllers.post-api :as api-pcon]
            [omchaya.datetime :as dt]
            [omchaya.api.kandan :as kandan-api]
            [omchaya.mock-data :as mock-data]
            [omchaya.routes :as routes]
            [omchaya.useful :as useful :refer [ffilter]]
            [omchaya.utils :as utils :refer [mprint]]
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
                                  :api      api-ch})))

;; :state-history is a vector of vectors, where the inner
;; vector is the same shape as the messages played
(def history
  (atom []))

(defn filtered-message? [message]
  (get #{:credit-card-updated} message))

(defn update-history! [history channel message]
  (let [m (first message)
        record (if (filtered-message? m) m message)]
    (swap! history conj [channel record])))

(defn main [target state]
  (let [comms   (:comms @state)
        history (or history (atom []))]
    (routes/define-routes! state (.getElementById js/document "history-container"))
    (om/root
     app/app
     state
     {:target target
      :opts {:comms comms}})
    (go (while true
          (alt!
           (:controls comms) ([v]
                                (when (:log-channels? utils/initial-player-state)
                                  (mprint "Controls Verbose: " (pr-str v)))
                                (let [previous-state @state]
                                  (update-history! history :controls v)
                                  (swap! state (partial controls-con/control-event target (first v) (second v)))
                                  (controls-pcon/post-control-event! target (first v) (second v) previous-state @state)))
           (:api comms) ([v]
                           (when (:log-channels? utils/initial-player-state)
                                  (mprint "API Verbose: " (pr-str v)))
                           (let [previous-state @state]
                             (update-history! history :api v)
                             (swap! state (partial api-con/api-event target (first v) (second v)))
                             (api-pcon/post-api-event! target (first v) (second v) previous-state @state)))
           ;; Capture the current history for playback in the absence
           ;; of a server to store it
           (async/timeout 30000) (mprint (pr-str @history)))))))

(defn setup! []
  (main (. js/document (getElementById "app")) app-state)
  (when (:kandan-client? utils/initial-query-map)
    (let [api-key       (:kandan-api-key utils/initial-query-map)
          kandan-client (kandan-api/make-client api-key "http://localhost:3000/remote/faye")
          channels      (:kandan-channels utils/initial-query-map)
          comms         (:comms @app-state)]
      (put! (:controls comms) [:api-key-updated api-key])
      (doseq [channel channels]
        (kandan-api/subscribe! kandan-client (str "/channels/" channel) (:api comms))))))

(set! (.-onload js/window) setup!)

;; Local dev tooling
(defn ^:export send-async-message [ch-name message data]
  (put! (get-in @app-state [:comms (keyword ch-name)]) [(keyword message) (js->clj data :keywordize-keys true)]))

(defn ^:export remove-channel! [channel-id]
  (put! (get-in @app-state [:comms :controls]) [:channel-remotely-destroyed channel-id]))

(comment
  ;; Uncomment to have random messages send
  (js/setInterval #(api/random-message (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 2500))
