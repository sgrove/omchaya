(ns omchaya.components.sandbox
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.crypt :as crypt]
            [goog.crypt.Md5]
            [omchaya.datetime :as dt]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(defn gravatar-for [email]
  (let [email (or email "unknown-email@unknown-domain.com")
        container (doto (goog.crypt.Md5.)
                    (.update email))
        hash (crypt/byteArrayToHex (.digest container))]
    [:img.avatar
     {:src
      (str "http://gravatar.com/avatar/" hash "?s=30&d=identicon")}]))

(defmulti activity-content
  (fn [current-user-email users settings author activity]
    (cond
     (seq (filter (fn [word]
                    (when-let [at (second (string/split word #"@"))]
                      (some #{at} (map (comp :username second) users)))) (string/split (:content activity) #" "))) :mentions
                      :else :normal)))

(defmethod activity-content :normal
  [current-user-email users settings author activity]
  (:content activity))

(defmethod activity-content :mentions
  [current-user-email users settings author activity]
  (-> (:content activity)
      (string/split #" ")
      (->>
       (map (fn [word]
              (if-let [at (some #{(second (string/split word #"@"))} (map (comp :username second) users))]
                [:span [:span.mention word] " "]
                (str word " ")))))))

(defn activity-entry [current-user-email users settings author activity]
  [:div.activity {:id (str "activity-" (:id activity))
                  :class (when (= current-user-email (:email author)) "current_user")
                  :key (:created_at activity)}
   [:span.posted_at (str (dt/time-ago (:created_at activity)) " ago")]
   (gravatar-for (:email author))
   [:div.readable
    [:span.user (or (:full-name author)
                    (:email author))]
    [:span.content (activity-content current-user-email users settings author activity)]]])

(defn main-area [channel owner opts]
  (reify
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])]
         [:article.main-area
          [:header.header
           [:a.nav-toggle.button.left {:href "#"} [:i.icon-comments]]
           [:a.sidebar-toggle.button.right {:href "#"} [:i.icon-reorder]]
           [:a.logo
            {:href "/"}
            [:img
             {:src "/assets/images/logo.png",
              :alt "Omchaya"}]]]
          [:div#channels
           [:div.channels-pane {:id (str "channels-" (:id channel))
                                :class (when (:selected channel) "active")}
            [:div.paginated-activities
             (when (:loading-more-messages channel)
               [:div.pagination
                [:i.icon-spinner.icon-spin.icon-2x]
                "Loading previous messages"])
             (map #(let [author (get-in opts [:users (:author %)])]
                     (activity-entry (:current-user-email opts)
                                     (:users opts)
                                     (:settings opts)
                                     author
                                     %)) (:activities channel))]
            [:div.chatbox [:textarea.chat-input
                           (merge
                            {:on-focus #(put! comm [:user-message-focused])
                             :on-blur #(put! comm [:user-message-blurred])
                             :on-key-up #(if (= (.. % -which) 13)
                                           (put! comm [:user-message-submitted])
                                           (put! comm [:user-message-updated (.. % -target -value)]))}
                            (when-not (:input-focused? opts)
                              {:value (:input-value opts)}))]
             [:button.post {:on-click #(put! comm [:user-message-submitted])} "Post"]]]]])))))

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

(defn current-user [comm user]
  [:a.user-menu-toggle
   {:href "#"
    :on-click (comp (constantly false)
                    #(put! comm [:user-menu-toggled]))}
   (gravatar-for (:email user))
   [:i.icon-angle.button.right {:style #js {:height "inherit"}}]
   (:full-name user)])

(defn people-entry [comm person]
  [:li.user
   {:title (or (:full-name person)
               (:username person)
               (:email person))
    :key (:email person)}
   (gravatar-for (:email person))
   (or (:full-name person)
       (:username person))])

(defn side-bar [data owner opts]
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
            [:li [:a {:href "/users/edit"} "Edit Account"]]
            [:li
             [:a
              {:rel "nofollow",
               :data-method "delete",
               :href "/users/sign_out"}
              "Logout"]]
            [:li [:a {:href "/about"} "About Kandan"]]]]
          [:div.widgets
           [:div#widget_widget_0.widget
            [:h5.widget-header
             [:img {:src "/assets/images/people_icon.png"}]
             "People\n  "]
            [:div#widget_0.widget-content
             [:ul.user_list
              (map (partial people-entry comm) (vals (select-keys (:users opts) (:users channel))))]]
            [:div.widget-action-bar {:style #js {:display "none"}}]]
           [:div#widget_widget_2.widget
            [:h5.widget-header
             [:img {:src "/assets/images/media_icon.png"}]
             "Media\n  "]
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

(defn sandbox [app owner opts]
  (reify
    om/IRender
    (render [this]
      (let [selected-channel (get-in app [:channels (:selected-channel app)])
            current-user (get-in app [:users (:current-user-email app)])]
        (html/html
         [:div
          (om/build side-bar {:channel selected-channel
                              :settings (:settings app)}
                    {:opts {:comms (:comms opts)
                            :users (:users app)
                            :current-user-email (:current-user-email app)}})
          (om/build main-area selected-channel {:opts {:comms (:comms opts)
                                                       :users (:users app)
                                                       :current-user-email (:current-user-email app)
                                                       :input-focused? (get-in app [:settings :forms :user-message :focused])
                                                       :input-value (get-in app [:settings :forms :user-message :value])}})
          (om/build navbar (select-keys app [:channels :settings]) {:opts {:comms (:comms opts)}})
          [:div#at-view.at-view [:ul#at-view-ul]]])))))
