(ns omchaya.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [omchaya.api.mock :as api]
            [omchaya.components.root :as root-com]
            [omchaya.controllers.experiment :as xp-con]
            [omchaya.controllers.controls :as controls-con]
            [omchaya.controllers.post-controls :as controls-pcon]
            [omchaya.controllers.api :as api-con]
            [omchaya.controllers.post-api :as api-pcon]
            [omchaya.datetime :as dt]
            [omchaya.api.kandan :as kandan-api]
            [omchaya.mock-data :as mock-data]
            [omchaya.routes :as routes]
            [omchaya.structure :as structure]
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
  (atom (assoc (mock-data/initial-state {:controls controls-ch
                                         :api      api-ch})
          :coms structure/coms)))

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

(defn swap-via-action [state action-results]
  (reduce (fn [running [_ {:keys [path new-value]}]]
            (when (:log-swap-paths? utils/initial-query-map)
                (print "Swapping " (pr-str _) " at " (pr-str path) " => " (pr-str new-value)))
            (if (and (vector? path)
                     (empty? path))
              new-value
              (assoc-in running path new-value))) state action-results))

(defn main [target state]
  (let [comms   (:comms @state)
        history (or history (atom []))
        event-lookup {(:controls comms) {:name :controls
                                         :controller controls-con/control-event
                                         :post-controller controls-pcon/post-control-event!}
                      (:api comms) {:name :api
                                    :controller api-con/api-event
                                    :post-controller api-pcon/post-api-event!}}]
    (routes/define-routes! state (.getElementById js/document "history-container"))
    (om/root
     root-com/root
     state
     {:target target
      :shared {:comms comms}})
    (go (while true
          (let [[v ch] (alts! (vals comms))
                {:keys [name controller post-controller]} (get event-lookup ch)]
            (when (:log-channels? utils/initial-query-map)
              (print (pr-str name) " Verbose: " (pr-str v)))
            (let [previous-state @state
                  action-results (controller target (first v) (second v) @state)]
              (swap! state swap-via-action action-results)
              (post-controller target (first v) (second v) previous-state @state)))))))

(defn setup! []
  (let [comms (:comms @app-state)]
    (main (. js/document (getElementById "app")) app-state)
    (when (:restore-state? utils/initial-query-map)
      (put! (:controls comms) [:state-restored]))
    (when (:kandan-client? utils/initial-query-map)
      (let [api-key       (:kandan-api-key utils/initial-query-map)
            kandan-client (kandan-api/make-client api-key "http://localhost:3000/remote/faye")
            channels      (:kandan-channels utils/initial-query-map)]
        (put! (:controls comms) [:api-key-updated api-key])
        (doseq [channel channels]
          (kandan-api/subscribe! kandan-client (str "/channels/" channel) (:api comms)))))))

(set! (.-onload js/window) setup!)

;; Local dev tooling
(defn ^:export send-async-message [ch-name message data]
  (put! (get-in @app-state [:comms (keyword ch-name)]) [(keyword message) (js->clj data :keywordize-keys true)]))

(defn ^:export remove-channel! [channel-id]
  (put! (get-in @app-state [:comms :controls]) [:channel-remotely-destroyed channel-id]))

(comment
  ;; Uncomment to have random messages send
  (js/setInterval #(api/random-message (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 2500))
