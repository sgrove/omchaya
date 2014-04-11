(ns omchaya.components.sidebar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.string :as gstring]
            [om.core :as om]
            [omchaya.components.common :as common]
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

(defn people-widget [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "PeopleWidget"))
    om/IRender
    (render [_]
      (html/html
       (let [data (:data payload)
             {:keys [channel-users-emails search-filter]} (:data payload)
             comm      (om/get-shared owner [:comms :controls])
             re-filter (when search-filter (js/RegExp. search-filter "ig"))
             channel-users (vals (select-keys (:users data) channel-users-emails))
             fil-users (if re-filter
                         (filter #(or (.match (:full-name %) re-filter)
                                      (.match (:email %) re-filter)
                                      (.match (:username %) re-filter)) channel-users)
                         channel-users)]
         [:ul.user_list
          (map (partial people-entry comm) fil-users)])))))

(defn media-name [src]
  (-> src
      (string/split #"/")
      last
      (string/split #"\?")
      first
      gstring/urlDecode))

(defn playlist-entry [comm selected-channel playing-order entry]
  (let [src (:src entry)
        order (:order entry)
        name (media-name src)]
    [:li.user
     (merge {:title src
             :key (str (:order entry) src)}
            (when (= (:order entry) playing-order)
              {:style #js {:background-color "#ccc"}}))
     [:a
      {:style #js {:cursor "pointer"}
       :on-click (comp (constantly false)
                       #(put! comm [:playlist-entry-played [order selected-channel]]))}
      (:order entry) ". " name]]))

(defn playlist-widget [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "PlaylistWidget"))
    om/IRender
    (render [_]
      (html/html
       (let [data (:data payload)
             {:keys [player search-filter selected-channel]} data
             comm (om/get-shared owner [:comms :controls])
             re-filter (when search-filter (js/RegExp. search-filter "ig"))
             fil-playlist (if re-filter
                            (filter #(.match (media-name (:src %)) re-filter) (:playlist player))
                            (:playlist player))]
         [:div 
          [:ul.user_list
           (map (partial playlist-entry comm selected-channel (:playing-order player))
                (sort-by :order fil-playlist))]])))))

(defn playlist-action-widget [payload owner opts]
  (let [comm (om/get-shared owner [:comms :controls])]
    (html/html
     (let [data (:data payload)
           {:keys [selected-channel player]} data]
       [:div.dropzone
        (if (= (:state player) :playing)
          [:i.fa.fa-pause
           {:style #js {:cursor "pointer"}
            :on-click #(put! comm [:audio-player-stopped selected-channel])}]
          [:i.fa.fa-play
           {:style #js {:cursor "pointer"}
            :on-click #(put! comm [:audio-player-started selected-channel])}])]))))

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

(defn media-widget [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "MediaWidget"))
    om/IRender
    (render [this]
      (html/html
       (let [data (:data payload)
             {:keys [media search-filter]} data
             comm (om/get-shared owner [:comms :controls])
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

(defn widget [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Widget"))
    om/IRender
    (render [this]
      (html/html
       (let [data (:data payload)
             my-path (:com-path opts)]
         [:div.widget
          [:h5.widget-header.unselectable
           [:img {:src (:icon data)}]
           (:title data)]
          [:div.widget-content
           (when (first (:children payload))
             (common/build-child my-path (common/get-app payload) 0 (first (:children payload))))]
          (when (second (:children payload))
            [:div.widget-action-bar
             (common/build-child my-path (common/get-app payload) 1 (second (:children payload)))])])))))

(defn current-user [payload owner opts]
  (reify
    om/IRender
    (render [_]
      (html/html
       (let [comm (om/get-shared owner [:comms :controls])
             user (get-in payload [:data :user])]
         [:div.current-user-menu-title
          (utils/gravatar-for (:email user))
          (:full-name user)])))))

(defn menu-item [payload owner opts]
  (reify
    om/IRender
    (render [_]
      (html/html
       (let [comm (om/get-shared owner [:comms :controls])
             text (get-in payload [:data :text])
             message (get-in payload [:data :message])]
         [:a {:href "#"
              :on-click #(put! comm [message])} text])))))

(defn titled-menu [payload owner opts]
  (reify
    om/IRender
    (render [_]
      (html/html
       (let [my-path (:com-path opts)
             comm (om/get-shared owner [:comms :controls])
             menu-opened? (get-in payload [:data :menu-opened?])
             children (common/children payload)
             rest-children (rest children)]
         [:div.header.user-header {:class (when menu-opened? "open-menu")}
          [:a.user-menu-toggle
           {:href "#"
            :on-click (comp (constantly false)
                            #(put! comm [:user-menu-toggled]))}
           [:i.icon-angle.button.right {:style #js {:height "inherit"
                                                    :float "right"}}]
           (common/build-child my-path (common/get-app payload) 0 (first children))]
           [:ul.user-menu
            [:li]
            (map (fn [idx child]
                   [:li
                    (common/build-child my-path (common/get-app payload) idx child)])
                 (range 1 (inc (count rest-children)))
                 rest-children)]])))))

(defn sidebar [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Sidebar"))
    om/IRender
    (render [this]
      (html/html
       (let [my-path (:com-path opts)
             children (common/children payload)
             rest-children (rest children)]
         [:aside.sidebar
          (common/build-child my-path (common/get-app payload) 0 (first (common/children payload)))
          [:div.widgets
           (map (partial common/build-child my-path (common/get-app payload))
                (range 1 (inc (count rest-children)))
                rest-children)]])))))
