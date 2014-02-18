(ns omchaya.components.app
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.crypt :as crypt]
            [goog.crypt.Md5]
            [omchaya.datetime :as dt]
            [omchaya.components.navbar :as navbar]
            [omchaya.components.sidebar :as sidebar]
            [omchaya.components.main-area :as main-area]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(defn app [app owner opts]
  (reify
    om/IRender
    (render [this]
      (let [selected-channel (get-in app [:channels (:selected-channel app)])
            current-user (get-in app [:users (:current-user-email app)])]
        (html/html
         [:div
          (om/build sidebar/sidebar {:channel selected-channel
                              :settings (:settings app)}
                    {:opts {:comms (:comms opts)
                            :users (:users app)
                            :current-user-email (:current-user-email app)}})
          (om/build main-area/main-area selected-channel {:opts {:comms (:comms opts)
                                                       :users (:users app)
                                                       :current-user-email (:current-user-email app)
                                                       :input-focused? (get-in app [:settings :forms :user-message :focused])
                                                       :input-value (get-in app [:settings :forms :user-message :value])}})
          (om/build navbar/navbar (select-keys app [:channels :settings]) {:opts {:comms (:comms opts)}})
          [:div#at-view.at-view [:ul#at-view-ul]]])))))
