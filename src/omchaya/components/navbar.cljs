(ns omchaya.components.navbar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [omchaya.routes :as routes]
            [omchaya.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

(defn tab [comm channel]
  (let [id (:id channel)]
    [:li.protected {:key (:id channel)
                    :on-click #(put! comm [:tab-selected id])
                    :class (str (utils/safe-sel (:id channel)) (when (:selected channel) " active"))}
     [:a.show_channel
      {:key "a"
       :on-click (comp (constantly false)
                       #(put! comm [:tab-selected id]))}
      (:title channel)
      (when (:loading channel)
        [:i.icon-spinner.icon-spin {:key "i"}])]]))

(defn navbar [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      "Navbar")
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])
             settings (:settings data)]
         [:nav.nav {:key "nav"
                    :class (when (get-in settings [:forms :search :focused]) "search-focus")}
          [:form.search
           {:key "form"
            :action "/search"
            :method "get"
            :on-submit (constantly false)}
           [:input.query {:key "query"
                          :name "query"
                          :type "text"
                          :on-focus  #(put! comm [:search-form-focused])
                          :on-blur   #(put! comm [:search-form-blurred])
                          :on-key-up #(put! comm [:search-form-updated (.. % -target -value)])}]
           [:input.submit {:key "search"
                           :value "Search"
                           :type "submit"}]]
          [:ul#channel_nav
           {:key "channel-nav"}
           (map (partial tab comm) (sort-by :order (vals (:channels data))))
           [:li {:key "new-tab"
                 :on-click #(put! comm [:create-channel-menu-opened])}
            [:a#create_channel
             {:key "create-channel"
              :href "#"
              :on-click (comp (constantly false)
                              #(put! comm [:create-channel-menu-opened]))}
             [:strong
              {:key "strong"}
              " + "]]]]])))))
