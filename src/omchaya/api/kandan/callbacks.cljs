(ns omchaya.api.kandan.callbacks
  (:require [goog.json :as json]
            [omchaya.utils :as utils]))

(defn send-user-message! [api-key activity cb]
  (utils/ajax (str "http://localhost:3000/channels/" (:channel-id activity) "/activities") "POST"
              (json/serialize (clj->js (merge activity
                                              {:user_id 1
                                               :authentication_token api-key
                                               :auth_token api-key
                                               :api_key api-key
                                               :action "message"})))
              cb
              cb
              #js {:Content-Type "application/json"}))
