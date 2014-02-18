(ns omchaya.components.navbar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(defn tab [comm channel]
  (let [id (:id channel)]
    [:li.protected {:key (:id channel)
                    :class (when (:selected channel) " active")}
     [:a.show_channel {:href (str "#channels-" (:id channel))
                       :on-click (comp (constantly false)
                                       #(put! comm [:tab-selected id]))} (:title channel)]]))

(defn navbar [data owner opts]
  (reify
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])
             settings (:settings data)]
         [:nav.nav {:class (when (get-in settings [:forms :search :focused]) "search-focus")}
          [:form.search
           {:action "/search", :method "get"}
           [:input.query {:name "query",
                          :type "text"
                          :on-focus #(put! comm [:search-form-focused])
                          :on-blur #(put! comm [:search-form-blurred])}]
           [:input.submit {:value "Search",
                           :type "submit"
                           :on-submit (constantly false)}]]
          [:ul#channel_nav
           (map (partial tab comm) (sort-by :order (vals (:channels data))))
           [:li {:key "new-tab" :style #js {:bottom 7}} [:a#create_channel {:href "#"} [:i.icon-plus]]]]])))))
