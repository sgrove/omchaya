(ns omchaya.test
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]))

(defn ^:export run []
  (let [summary (run-tests)
        success? (and (zero? (:fail summary 0))
                      (zero? (:error summary 0)))]
    (.log js/console "Success? " success?)
    (if success?
      0
      1)))
