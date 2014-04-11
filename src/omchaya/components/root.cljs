(ns omchaya.components.root
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [omchaya.components.common :as common]
            [omchaya.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

(defn root [app owner opts]
  (reify
    om/IRender
    (render [_]
      (om/build (get-in app [:coms :root :com])
                (common/component-data app [:root])
                {:opts {:com-path [:root]}}))))
