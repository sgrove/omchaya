(ns omchaya.api.kandan
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [omchaya.api.kandan.callbacks :as callbacks]
            [omchaya.useful :as useful :refer [ffilter]]
            [omchaya.utils :as utils :refer [mprint]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(defmulti process-event!
  (fn [entity-name event-name data]
    [entity-name (-> (:event data)
                     (string/split #"#")
                     first
                     keyword)]))

(defmethod process-event! [:user :connect]
  [entity-name event-name data]
  "Placeholder")

(defmethod process-event! [:channel :delete]
  [entity-name event-name data]
  "Placeholder")

(defmethod process-event! [:channel :create]
  [entity-name event-name data]
  "Placeholder")

(defmethod process-event! [:channel :update]
  [entity-name event-name data]
  "Placeholder")

(defmethod process-event! [:attachments :added]
  [entity-name event-name data]
  "Placeholder")


(defn handle-activity [data]
  (let [data (js->clj data :keywordize-keys)
        event (:event data)
        [entity-name event-name] (map keyword (string/split event #"#"))]
    (process-event! entity-name event-name data)))


(defn make-client [auth-token end-point]
  (let [client (js/Faye.Client. end-point)
        auth-extension (js-obj "outgoing"
                               (fn [message, cb]
                                 (when (= (.-channel message) "/meta/subscribe")
                                   (aset message "ext" #js {:auth_token auth-token}))
                                 (cb message)))]
    (doto client
      (.disable "websocket")
      (.addExtension auth-extension)
      (.bind "transport:down" #(mprint "Connection to Kandan server is down"))
      (.bind "transport:up" #(mprint "Connection to Kandan server is up"))
      (.subscribe "/app/activities" handle-activity))))

(defn normalize-activity [activity]
  {:id         (:id activity)
   :channel-id (utils/safe-sel (:channel_id activity))
   :created_at (js/Date. (:created_at activity))
   :author     (get-in activity [:user :email])
   :content    (:content activity)})

(defn subscribe! [client remote-channel-name api-ch]
  (let [subscription (.subscribe client remote-channel-name)]
    (.subscribe client remote-channel-name
                (fn [activity]
                  (let [normalized (normalize-activity (js->clj activity :keywordize-keys true))]
                    (put! api-ch [:channel-activity-received normalized]))))
    (.errback client (fn [data]
                       (put! api-ch [:channel-error-received (js->clj data :keywordize-keys true)])))
    subscription))

(defn save [api-key obj]
  (callbacks/post-activity! api-key (js->clj obj) #(mprint "Save Activity Result: " %)))
