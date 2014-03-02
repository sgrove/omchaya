(ns omchaya.components.history-player
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.events :as events]
            [om.core :as om :include-macros true]
            [sablono.core :as html :include-macros true]
            [omchaya.utils :as utils])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:import [goog.events EventType]))

(def local-dragging? (atom false))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type #(do (when @local-dragging?
                                  (.preventDefault %))
                                (put! out %)))
    out))

(defmulti player-step (fn [format-version active-step-number step-number step]
                        format-version))

(defmethod player-step 1
  [format-version active-step-number comm step-number step]
  [:div.replay-step {:class (when (= active-step-number step-number) "active")
                     :on-click #(put! comm [:step-selected step-number])
                     :style #js {:cursor "pointer"}}
   (pr-str step)])

(defn playlist-entry [comm replay-number replay]
  [:div.playlist-entry
   {:on-click #(put! comm [:replay-selected replay-number])
    :style #js {:cursor "pointer"}}
   (or (:name replay) "No name for recording")])

(defn player [app owner]
  (reify
    ;; om/IDisplayName
    ;; (display-name [_]
    ;;   "HistoryPlayer")
    om/IWillMount
    (will-mount [_]
      (let [mouse-move-chan
            (async/map
             (fn [e] [(.-clientX e) (.-clientY e)])
             [(listen js/window "mousemove")])

            mouse-up-chan
            (async/map
             (fn [e] [(.-clientX e) (.-clientY e)])
             [(listen js/window "mouseup")])

            comm (get-in app [:player-comms :player-drag])]
        (go (while true
              (alt!
               mouse-move-chan ([val] (put! comm [:mouse-moved val]))
               mouse-up-chan ([val]
                                (put! comm [:history-player-released val])
                                (reset! local-dragging? false)))))))
    om/IRender
    (render [_]
      (html/html
       (let [comm          (get-in app [:player-comms :player-control])
             drag-comm     (get-in app [:player-comms :player-drag])
             replays       (get-in app [:replays :replay-list])
             queued-replay (get-in app [:replays :queued-replay])
             {:keys [format_version history active-step]} queued-replay]
         [:div.history-player
          {:style (when-let [pos (get-in app [:player :position])]
                    #js {:position "fixed"
                         :top (last pos)
                         :left (first pos)})}
          [:div.row.modal-header
           [:div.col-lg-12
            (merge {:style (clj->js
                            (merge {:background-color (if (get-in app [:player :dragging?])
                                                        "#050"
                                                        "#500")
                                    :color "white"
                                    :text-align "center"}))
                    :onMouseDown #(do
                                    (reset! local-dragging? true)
                                    (put! drag-comm [:history-player-grabbed [(.-clientX %) (.-clientY %)]]))})
            "[History Player]"]]
          [:div.row
           [:div.col-lg-4
            [:button {:on-click (if (= (:state app) :playing)
                                 #(put! comm [:player-stopped])
                                 #(put! comm [:player-started]))}
             (if (= (:state app) :playing)
               (list [:i.fa.fa-pause] " Pause")
               (list [:i.fa.fa-play] " Play"))]]
           [:div.col-lg-4
            (if queued-replay
              (str "Recording format v" format_version ", recorded on " (:created_at queued-replay))
              (str "No recording loaded"))]]
          [:div.row
           [:div.col-lg-4.col-md-4.col-sm-8.col-xs-8
            [:div.playlist-entries
             [:h4 "Replays"]
             (map (partial playlist-entry comm) (range) replays)]]
           [:div.col-lg-8.col-md-8.col-sm-8.col-xs-8
            [:div.playlist-steps
             [:h4 "Steps"]
             (map (partial player-step format_version active-step comm) (range) history)]]]])))))
