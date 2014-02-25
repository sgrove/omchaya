(ns omchaya.test.components.navbar
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing)])
  (:require [cemerick.cljs.test :as t]
            [dommy.core :as dommy]
            [om.core :as om :include-macros true]
            [omchaya.test.components.common :as com]
            [omchaya.components.navbar :as navbar])
  (:use-macros [dommy.macros :only [node sel sel1]]))

(defn h->n [el hiccup-like]
  (dommy/append! el (node hiccup-like)))

(deftest navbar-renders?
  (let [data {:channels {"1" {:order 1
                                :id "1"
                                :title "Lobby"}
                           "Lemon Tree" {:order 2
                                         :id "lemon-tree"
                                         :title "Lemon Tree"}}
              :settings {:forms {:search {:focused false}}}}]
    (testing "Correct number of tabs"
      (is (= 2
             (let [c (com/new-container!)]
               (print "Testing with container: " c)
               (om/root navbar/navbar data {:target c})
               (count (sel c :a.show_channel))))))
    (testing "Correct titles"
      (is (= ["Lobby" "Lemon Tree"]
             (let [c (com/new-container!)]
               (om/root navbar/navbar data {:target c})
               (map dommy/text (sel c :.show_channel))))))
    (testing "Search bar has correct classes when focused/blurred"
      (is (not (let [c (com/new-container!)]
                 (om/root navbar/navbar data {:target c})
                 (dommy/has-class? (sel1 c :nav) "active"))))
      (is (let [c (com/new-container!)
                data (assoc-in data [:settings :forms :search :focused] true)]
            (om/root navbar/navbar data {:target c})
            (dommy/has-class? (sel1 c :nav) "search-focus"))))))
