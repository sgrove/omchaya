(ns omchaya.components.navbar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [omchaya.routes :as routes]
            [omchaya.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

(defn tab [comm channel]
  (let [id (:id channel)]
    [:li.protected {:key (:id channel)
                    :class (str (utils/safe-sel (:id channel)) (when (:selected channel) " active"))}
     [:a.show_channel
      {:on-click (comp (constantly false)
                       #(put! comm [:tab-selected id]))}
      (:title channel)
      (when (:loading channel)
        [:i.icon-spinner.icon-spin])]]))

(defn navbar [data owner opts]
  (reify
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])
             settings (:settings data)]
         [:nav.nav {:class (when (get-in settings [:forms :search :focused]) "search-focus")}
          [:form.search
           {:action "/search",
            :method "get"
            :on-submit (constantly false)}
           [:input.query {:name "query",
                          :type "text"
                          :on-focus #(put! comm [:search-form-focused])
                          :on-blur #(put! comm [:search-form-blurred])
                          :on-key-up #(put! comm [:search-form-updated (.. % -target -value)])}]
           [:input.submit {:value "Search",
                           :type "submit"}]]
          [:ul#channel_nav
           (map (partial tab comm) (sort-by :order (vals (:channels data))))
           [:li {:key "new-tab"} [:a#create_channel {:href "#"
                                                     :on-click #(put! comm [:create-channel-menu-opened])} [:strong " + "]]]]])))))
