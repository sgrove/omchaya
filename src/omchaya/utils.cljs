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
  (:import [goog.net XhrIo]
           [goog.async Deferred])
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

(def parsed-uri
  (goog.Uri. (-> (.-location js/window) (.-href))))

(def initial-query-map
  {:kandan-channels  (string/split (or (.getParameterValue parsed-uri "kandan-channels") "1") #",")
   :kandan-api-key   (.getParameterValue parsed-uri "kandan-api-key")
   :kandan-client?   (seq (.getParameterValue parsed-uri "kandan-api-key"))
   :log-channels?    (or (.getParameterValue parsed-uri "log-channels") false)
   :logging-enabled? (= (.getParameterValue parsed-uri "logging-enabled") "true")
   :restore-state?   (= (.getParameterValue parsed-uri "restore-state") "true")})

(def logging-enabled?
  (:logging-enabled? initial-query-map))

(defn mprint [& message]
  (when logging-enabled?
    (apply print message)))

(defn safe-sel [s]
  (str (string/replace (string/lower-case (str s)) #"[\W]" "-")))

(defn email->gravatar-url [email]
  (let [email (or email "unknown-email@unknown-domain.com")
        container (doto (goog.crypt.Md5.)
                    (.update email))
        hash (crypt/byteArrayToHex (.digest container))]
    (str "http://gravatar.com/avatar/" hash "?s=30&d=identicon")))

(defn gravatar-for [email & [optional-uid]]
  [:img.avatar
   {:key (str email optional-uid)
    :src (email->gravatar-url email)}])

(defn set-window-href! [path]
  (js/window.history.pushState #js {}, "", path))

(defn ajax [url method data-string success & [error headers]]
  (let [request (XhrIo.)
        d (goog.async.Deferred.)
        listener-id (ge/listen request gevt/COMPLETE (fn [response]
                                                       (let [target (.-target response)
                                                             data (if (= method "DELETE")
                                                                    nil
                                                                    (.getResponseJson target ))]
                                                         (.callback d data))))]
                                        ; Setup deferred callbacks
    (.addErrback d  (fn [error] (.log js/console "Error on ajax: " error)))
    (when success (.addCallback d #(success (js->clj % :keywordize-keys true))))
    (when error (.addErrback d error))
    (.addBoth d (fn [value] (ge/unlistenByKey listener-id) (.dispose request)))
    (mprint (str "Firing request to " url " via " method " and data - : " data-string))
                                        ; Fire request
    (.send request url method data-string headers)
    request))
