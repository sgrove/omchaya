(ns omchaya.components.app
  (:require [omchaya.components.audio-player :as audio]
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
          (om/build-all audio/player (map (fn [[channel-id channel]]
                                            {:audio-settings (:audio app)
                                             :player (:player channel)
                                             :sfx (:sfx channel)
                                             :id channel-id}) (:channels app)) {:opts {:comms (:comms app)}})
          (om/build sidebar/sidebar {:channel selected-channel
                                     :settings (:settings app)
                                     :search-filter (get-in app [:settings :forms :search :value])}
                    {:opts {:comms (:comms opts)
                            :users (:users app)
                            :current-user-email (:current-user-email app)
                            :selected-channel (:selected-channel app)
                            :channels (:channels app)}})
          (om/build main-area/main-area {:channel selected-channel
                                         :search-filter (get-in app [:settings :forms :search :value])} {:opts {:comms (:comms opts)
                                                                 :users (:users app)
                                                                 :current-user-email (:current-user-email app)
                                                                 :input-focused? (get-in app [:settings :forms :user-message :focused])
                                                                 :input-value (get-in app [:settings :forms :user-message :value])}})
          (om/build navbar/navbar (select-keys app [:channels :settings]) {:opts {:comms (:comms opts)}})
          [:div#at-view.at-view [:ul#at-view-ul]]])))))
