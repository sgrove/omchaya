(ns omchaya.components.draggable-window
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
    (events/listen el type (fn [event]
                             (when @local-dragging?
                               (.preventDefault event))
                             (put! out event)))
    out))

(defn draggable-window [data owner opts]
  (reify
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

            comm (:comm data)
            name (:name data)]
        (go (while true
              (alt!
               mouse-move-chan ([position] (put! comm [:draggable [:mouse-moved {:name name
                                                                                 :position position}]]))
               mouse-up-chan ([position]
                                (put! comm [:draggable [:released {:name name
                                                                   :position position}]])
                                (reset! local-dragging? false)))))))
    om/IRender
    (render [_]
      (html/html
       (let [{:keys [comm name window]} data]
         [:div.draggable-window
          {:style (when-let [pos (:position window)]
                    #js {:position "fixed"
                         :top (last pos)
                         :left (first pos)})}
          [:div.row.modal-header
           [:div.col-lg-12
            (merge {:style (clj->js
                            (merge {:background-color (if (:dragging? window)
                                                        "#050"
                                                        "#500")
                                    :color "white"
                                    :text-align "center"}))
                    :onMouseDown #(do
                                    (reset! local-dragging? true)
                                    (put! comm [:draggable [:grabbed {:name name
                                                                      :position [(.-clientX %) (.-clientY %)]}]]))})
            (:title data)]]
          [:div.row
           (om/build (:content-com data) (:content-data data) (:content-opts data))]])))))
