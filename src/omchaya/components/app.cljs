(ns omchaya.components.app
  (:require [omchaya.components.common :as common]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(defn app [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Omchaya"))
    om/IRender
    (render [this]
      (let [my-path (:com-path opts)]
        (html/html
         [:div
          {:className (str (when (get-in payload [:data :sidebars :right :open]) "slide-left ")
                           (when (get-in payload [:data :sidebars :left :open]) "slide-right "))}
          (common/build-children (:com-path opts) payload)
          [:div#at-view.at-view [:ul#at-view-ul]]])))))
