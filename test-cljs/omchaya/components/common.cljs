(ns omchaya.test.components.common
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing)])
  (:require [cemerick.cljs.test :as t]
            [dommy.core :as dommy]
            [om.core :as om :include-macros true])
  (:use-macros [dommy.macros :only [node sel sel1]]))

(defn container-div []
  (let [id (str "container-" (gensym))]
    [(node [:div {:id id}]) (str "#" id)]))

(defn insert-container! [container]
  (dommy/append! (sel1 js/document :body) container))

(defn new-container! []
  (let [[n s] (container-div)]
    (insert-container! n)
    (sel1 s)))
