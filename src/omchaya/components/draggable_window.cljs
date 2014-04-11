(ns omchaya.components.draggable-window
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.events :as events]
            [om.core :as om :include-macros true]
            [omchaya.components.common :as common]
            [omchaya.utils :as utils]
            [sablono.core :as html :include-macros true])
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

(defn draggable-window [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "DraggableWindow"))
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

            comm (chan)
            parent-comm (om/get-shared owner [:comms :controls])
            name (get-in payload [:data :name])]
        (om/set-state! owner [:internal-comm comm])
        (go (while true
              (alt!
               mouse-move-chan ([position] (when (and (om/get-state owner :open)
                                                      @local-dragging?)
                                             (put! parent-comm [:draggable [:mouse-moved {:name name
                                                                                          :position position}]])))
               mouse-up-chan ([position]
                                (when (om/get-state owner :open)
                                  (put! parent-comm [:draggable [:released {:name name
                                                                            :position position}]]))
                                (reset! local-dragging? false)))))))
    om/IRender
    (render [_]
      (html/html
       (let [data (:data payload)
             comm (om/get-shared owner [:comms :controls])
             name (om/value (:name data))
             {:keys [window]} data]
         (when (not= (:open window) (om/get-state owner :open))
           (om/set-state! owner :open (:open window)))
         [:div.window
          (when (:open window)
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
              (common/build-children (:com-path opts) payload)]])])))))
