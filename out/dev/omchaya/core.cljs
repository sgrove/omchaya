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
            [omchaya.mock-data :as mock-data]
            [omchaya.routes :as routes]
            [omchaya.useful :as useful :refer [ffilter]]
            [omchaya.utils :as utils]
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

(defn main [target state]
  (let [comms (:comms @state)]
    (routes/define-routes! state (.getElementById js/document "history-container"))
    (om/root
     app/app
     state
     {:target target
      :opts {:comms comms}})
    (go (while true
          (alt!
           (:controls comms) ([v]
                                (let [previous-state @state]
                                  (swap! state (partial controls-con/control-event target (first v) (second v)))
                                  (controls-pcon/post-control-event! target (first v) (second v) previous-state @state)))
           (:api comms) ([v]
                           (let [previous-state @state]
                             (swap! state (partial api-con/api-event target (first v) (second v)))
                             (api-pcon/post-api-event! target (first v) (second v) previous-state @state))))))))

(defn setup! []
  (main (. js/document (getElementById "app")) app-state))

(set! (.-onload js/window) setup!)

;; Local dev tooling
(defn ^:export send-async-message [ch-name message data]
  (put! (get-in @app-state [:comms (keyword ch-name)]) [(keyword message) (js->clj data :keywordize-keys true)]))

(defn ^:export remove-channel! [channel-id]
  (put! (get-in @app-state [:comms :controls]) [:channel-remotely-destroyed channel-id]))

<<<<<<< HEAD
(js/setInterval #(api/random-message (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 1500)
=======
(js/setInterval #(api/random-message (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 250)
>>>>>>> master
