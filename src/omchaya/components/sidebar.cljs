(ns omchaya.components.sidebar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.string :as gstring]
            [om.core :as om]
            [omchaya.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

(defn people-entry [comm person]
  [:li.user
   {:title (or (:full-name person)
               (:username person)
               (:email person))
    :key (:email person)}
   (utils/gravatar-for (:email person))
   (or (:full-name person)
       (:username person))])

(defn people-widget [{:keys [channel-users-emails search-filter] :as data} owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "PeopleWidget"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])
             re-filter (when search-filter (js/RegExp. search-filter "ig"))
             channel-users (vals (select-keys (:users opts) channel-users-emails))
             fil-users (if re-filter
                         (filter #(or (.match (:full-name %) re-filter)
                                      (.match (:email %) re-filter)
                                      (.match (:username %) re-filter)) channel-users)
                         channel-users)]
         [:ul.user_list
          (map (partial people-entry comm) fil-users)])))))

(defn current-user [comm user]
  [:a.user-menu-toggle
   {:href "#"
    :on-click (comp (constantly false)
                    #(put! comm [:user-menu-toggled]))}
   (utils/gravatar-for (:email user))
   [:i.icon-angle.button.right {:style #js {:height "inherit"}}]
   (:full-name user)])

(defn media-name [src]
  (-> src
      (string/split #"/")
      last
      (string/split #"\?")
      first
      gstring/urlDecode))

(defn playlist-entry [comm opts entry]
  (let [src (:src entry)
        order (:order entry)
        name (media-name src)]
    [:li.user
     (merge {:title src
             :key (str (:order entry) src)}
            (when (= (:order entry) (get-in opts [:channels (:selected-channel opts) :player :playing-order]))
              {:style #js {:background-color "#ccc"}}))
     [:a
      {:style #js {:cursor "pointer"}
       :on-click (comp (constantly false)
                       #(put! comm [:playlist-entry-played [order (:selected-channel opts)]]))}
      (:order entry) ". " name]]))

(defn playlist-widget [{:keys [player search-filter]} owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "PlaylistWidget"))
    om/IRender
    (render [_]
      (html/html
       (let [comm (get-in opts [:comms :controls])
             re-filter (when search-filter (js/RegExp. search-filter "ig"))
             fil-playlist (if re-filter
                            (filter #(.match (media-name (:src %)) re-filter) (:playlist player))
                            (:playlist player))]
         [:div 
          [:ul.user_list
           (map (partial playlist-entry comm opts)
                (sort-by :order fil-playlist))]])))))

(defn playlist-action-widget [{:keys [player]} owner opts]
  (let [comm (get-in opts [:comms :controls])]
    (html/html
     [:div.dropzone
      (if (= (:state player) :playing)
        [:i.fa.fa-pause
         {:style #js {:cursor "pointer"}
          :on-click #(put! comm [:audio-player-stopped (:selected-channel opts)])}]
        [:i.fa.fa-play
         {:style #js {:cursor "pointer"}
          :on-click #(put! comm [:audio-player-started (:selected-channel opts)])}])])))

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

(defn media-widget [{:keys [channel-id media search-filter]} owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "MediaWidget"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (:comm opts)
             re-filter (when search-filter (js/RegExp. search-filter "ig"))]
         [:ul.file_list
          (map (partial media-entry comm) (if re-filter
                                      (filter #(.match (:name %) re-filter) media)
                                      media))])))))

(defn media-action-widget [{:keys [channel-id]} owner opts]
  (let []
    (html/html
     [:form#file_upload
      {:method "post",
       :html "{:multipart=>true}",
       :data-remote "true",
       :action (str "/channels/" channel-id "/attachments.json"),
       :accept-charset "UTF-8"}
      [:div
       {:style #js {:margin "0", :padding "0", :display "inline"}}
       [:input {:value "✓", :type "hidden", :name "utf8"}]
       [:input
        {:value "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=",
         :type "hidden",
         :name "authenticity_token"}]]
      [:input#channel_id_1 {:type "hidden", :name (str "channel_id[" channel-id "]")}]
      [:input#file {:type "file", :name "file"}]
      [:div.dropzone "Drop file here to upload"]])))

(defn widget [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Widget"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (:comm opts)]
         [:div.widget
          [:h5.widget-header.unselectable
           [:img {:src (:icon opts)}]
           (:title opts)]
          [:div.widget-content
           (om/build (:content-comp opts) (:content-data data) {:opts (:content-opts data)})]
          (when (:action-comp opts)
            [:div.widget-action-bar
             (om/build (:action-comp opts) (:action-data data) {:opts (:action-opts data)})])])))))

(defn sidebar [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Sidebar"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])
             channel (:channel data)
             settings (:settings data)
             search-filter (:search-filter data)]
         (print "Sidebar render")
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
           (om/build widget
                     {:content-data {:channel-users-emails (:users channel)
                                     :search-filter search-filter}
                      :content-opts opts}
                     {:opts {:title "People"
                             :icon "/assets/images/people_icon.png"
                             :content-comp people-widget}})
           (om/build widget
                     {:content-data {:player        (:player channel)
                                     :search-filter search-filter}
                      :content-opts opts
                      :action-data {:player (:player channel)}
                      :action-opts opts}
                     {:opts {:title "Playlist"
                             :icon "/assets/images/video_icon.png"
                             :content-comp playlist-widget
                             :action-comp playlist-action-widget}})
           (om/build widget
                     {:content-data {:search-filter search-filter
                                     :media       (:media channel)
                                     :channel-id  (:id channel)}
                      :content-opts {:comm comm}
                      :action-data {:channel-id (:id channel)}}
                     {:opts {:title "My Media"
                             :icon "/assets/images/media_icon.png"
                             :content-comp media-widget
                             :action-comp media-action-widget}})]])))))
