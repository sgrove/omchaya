(ns omchaya.components.sidebar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.string :as gstring]
            [om.core :as om]
            [omchaya.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

(def icon-map
  {"png" "img"
   "jpg" "img"
   "jpeg" "img"})

(defn media-entry [comm media]
  (let [extension (-> (string/split (:src media) #"\?")
                      first
                      (string/split #"\.")
                      last)]
    [:li.file_item {:key (:src media)}
     [:a
      {:href "#"
       :on-click (constantly false)
       :target "_blank"}
      [:img {:src (str "/assets/images/" (get icon-map extension "file") "_icon.png")}]
      [:span (:name media)]]]))

(defn people-entry [comm person]
  [:li.user
   {:title (or (:full-name person)
               (:username person)
               (:email person))
    :key (:email person)}
   (utils/gravatar-for (:email person))
   (or (:full-name person)
       (:username person))])

(defn current-user [comm user]
  [:a.user-menu-toggle
   {:href "#"
    :on-click (comp (constantly false)
                    #(put! comm [:user-menu-toggled]))}
   (utils/gravatar-for (:email user))
   [:i.icon-angle.button.right {:style #js {:height "inherit"}}]
   (:full-name user)])

(defn playlist-entry [comm opts entry]
  (let [src (:src entry)
        name (-> (:src entry)
                 (string/split #"/")
                 last
                 (string/split #"\?")
                 first
                 gstring/urlDecode)]
    [:li.user
     (merge {:title (:src entry)
             :key (str (:order entry) src)}
            (when (= (:order entry) (get-in opts [:channels (:selected-channel opts) :player :playing-order]))
              {:style #js {:background-color "#ccc"}}))
     [:a
      {:style #js {:cursor "pointer"}
       :on-click (comp (constantly false)
                       #(put! comm [:playlist-entry-played [(:order entry) (:selected-channel opts)]]))}
      (:order entry) ". " name]]))

(defn playlist-widget [player-data owner opts]
  (reify
    om/IRender
    (render [_]
      (html/html
       (let [comm (get-in opts [:comms :controls])]
         [:div.widget-content
          [:ul.user_list
           (map (partial playlist-entry comm opts) (sort-by :order (:playlist player-data)))]])))))

(defn sidebar [data owner opts]
  (reify
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])
             channel (:channel data)
             settings (:settings data)]
         [:aside.sidebar
          [:div.header.user-header {:class (when (get-in settings [:menus :user-menu :open]) "open-menu")}
           (current-user comm (get-in opts [:users (:current-user-email opts)]))
           [:ul.user-menu
            [:li]
            [:li [:a {:href "#"
                      :on-click #(put! comm [:settings-opened])} "Edit Account"]]
            [:li
             [:a
              {:rel "nofollow",
               :href "#"
               :on-click #(put! comm [:user-logged-out])}
              "Logout"]]
            [:li [:a {:href "#"
                      :on-click #(put! comm [:help-opened])} "Help"]]
            [:li [:a {:href "#"
                      :on-click #(put! comm [:about-opened])} "About Omchaya"]]]]
          [:div.widgets
           [:div#widget_widget_0.widget
            [:h5.widget-header
             [:img {:src "/assets/images/people_icon.png"}]
             "People"]
            [:div#widget_0.widget-content
             [:ul.user_list
              (map (partial people-entry comm) (vals (select-keys (:users opts) (:users channel))))]]
            [:div.widget-action-bar {:style #js {:display "none"}}]]
           [:div#widget_widget_1.widget
            [:h5.widget-header
             [:img {:src "/assets/images/video_icon.png"}]
             "Playlist  " (if (= (get-in channel [:player :state]) :playing)
                            [:i.fa.fa-pause
                             {:style #js {:cursor "pointer"}
                              :on-click #(put! comm [:audio-player-stopped (:selected-channel opts)])}]
                            [:i.fa.fa-play
                             {:style #js {:cursor "pointer"}
                              :on-click #(put! comm [:audio-player-started (:selected-channel opts)])}])
             (when (and false ;; React needs some audio-tag
                                         ;; love before we can
                                         ;; reliably detect this
                        (get-in channel [:player :loading]))
                          [:i.icon-spinner.icon-spin.icon-2x
                           {:style #js {:float "right"}}])]
            (om/build playlist-widget (:player channel) {:opts opts})
            [:div.widget-action-bar {:style #js {:display "none"}}]]
           [:div#widget_widget_2.widget
            [:h5.widget-header
             [:img {:src "/assets/images/media_icon.png"}]
             "Media"]
            [:div#widget_2.widget-content
             [:ul.file_list
              (map (partial media-entry comm) (:media channel))]]
            [:div.widget-action-bar
             [:form#file_upload
              {:method "post",
               :html "{:multipart=>true}",
               :data-remote "true",
               :action (str "/channels/" (:id channel) "/attachments.json"),
               :accept-charset "UTF-8"}
              [:div
               {:style #js {:margin "0", :padding "0", :display "inline"}}
               [:input {:value "✓", :type "hidden", :name "utf8"}]
               [:input
                {:value "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=",
                 :type "hidden",
                 :name "authenticity_token"}]]
              [:input#channel_id_1 {:type "hidden", :name (str "channel_id[" (:id channel) "]")}]
              [:input#file {:type "file", :name "file"}]
              [:div.dropzone "Drop file here to upload"]]]]]])))))
