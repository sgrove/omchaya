(ns omchaya.utils
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.crypt :as crypt]
            [goog.crypt.Md5]
            [goog.events :as ge]
            [goog.Uri]
            [goog.net.EventType :as gevt]
            [goog.i18n.NumberFormat.Format :as formats]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :as am :refer [go alt!]])
  (:use-macros [dommy.macros :only [node sel sel1]]))

(defn uuid
  "returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
  []
  (let [r (repeatedly 30 (fn [] (.toString (rand-int 16) 16)))]
    (apply str (concat (take 8 r) ["-"]
                       (take 4 (drop 8 r)) ["-4"]
                       (take 3 (drop 12 r)) ["-"]
                       [(.toString  (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16)]
                       (take 3 (drop 15 r)) ["-"]
                       (take 12 (drop 18 r))))))

(defn safe-sel [s]
  (str (string/replace (string/lower-case s) #"[\W]" "-")))

(defn email->gravatar-url [email]
  (let [email (or email "unknown-email@unknown-domain.com")
        container (doto (goog.crypt.Md5.)
                    (.update email))
        hash (crypt/byteArrayToHex (.digest container))]
    (str "http://gravatar.com/avatar/" hash "?s=30&d=identicon")))

(defn gravatar-for [email]
  [:img.avatar
     {:src
      (email->gravatar-url email)}])
