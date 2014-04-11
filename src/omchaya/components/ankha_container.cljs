(ns omchaya.components.ankha-container
  (:require [ankha.core :as ankha]
            [om.core :as om :include-macros true]
            [omchaya.components.common :as common]
            [omchaya.utils :as utils]
            [sablono.core :as html :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:import [goog.events EventType]))

(defn ankha-container [payload owner opts]
  (reify
    om/IRender
    (render [_]
      (om/build ankha/inspector (get-in payload [:data :inspected])))))
