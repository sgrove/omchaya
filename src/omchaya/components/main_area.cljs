(ns omchaya.components.main-area
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [omchaya.datetime :as dt]
            [omchaya.plugins :as plugins]
            [omchaya.utils :as utils]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(def delimiter-re #" ")

(defn activity-content [current-user-email users settings author activity]
  (let [content (-> (string/split (:content activity) delimiter-re)
                    plugins/pastie
                    (plugins/mentions current-user-email users settings author)
                    (plugins/slash-me current-user-email users)
                    plugins/slash-play
                    plugins/emoticons
                    plugins/links
                    plugins/rgb-embed
                    plugins/hex-embed)]
    (interpose " " content)))

(defn activity-entry [current-user-email users settings author activity]
  (list
   [:div.activity {:key (str "activity-" (:id activity))
                   :id (str "activity-" (:id activity))
                   :class (when (= current-user-email (:email author)) "current_user")}
    [:span.posted_at {:key "posted-at"} (str (dt/time-ago (:created_at activity)) " ago")]
    (utils/gravatar-for (:email author))
    [:div.readable {:key "readable"}
     [:span.user {:key "user"}
      (or (:full-name author)
          (:email author))]
     [:span.content
      {:key "content"}
      (activity-content current-user-email users settings author activity)]]
    (map (fn [media]
           [:div.media-entry
            {:key "media-entry"}
            media])
         (remove string? (-> (string/split (:content activity) delimiter-re)
                             plugins/image-embed
                             plugins/youtube-embed
                             plugins/vimeo-embed)))]))


(defn chatbox [comm opts]
  [:div.chatbox {:key "chatbox"}
   [:textarea.chat-input
                 (merge
                  {:key "textarea"
                   :on-focus #(put! comm [:user-message-focused])
                   :on-blur #(put! comm [:user-message-blurred])
                   :on-key-up #(if (= (.. % -which) 13)
                                 (put! comm [:user-message-submitted])
                                 (put! comm [:user-message-updated (.. % -target -value)]))}
                  (when-not (:input-focused? opts)
                    {:value (:input-value opts)}))]
   [:button.post {:key "button"
                  :on-click #(put! comm [:user-message-submitted])} "Post"]])

(defn activities-list [filtered-activities opts]
  (map #(let [author (get-in opts [:users (:author %)])]
          (activity-entry (:current-user-email opts)
                          (:users opts)
                          (:settings opts)
                          author
                          %))
       filtered-activities))

(defn main-area [{:keys [channel search-filter]} owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      "MainArea")
    om/IRender
    (render [this]
      (html/html
       (let [comm       (get-in opts [:comms :controls])
             re-filter  (when search-filter (js/RegExp. search-filter "ig"))
             activities (:activities channel)
             filtered-activities (if re-filter
                                   (filter #(.match (:content %) re-filter) activities)
                                   activities)]
         [:article.main-area
          [:header.header
           {:key "header"}
           [:a.nav-toggle.button.left {:key "left"
                                       :href "#"
                                       :on-click #(put! comm [:left-sidebar-toggled])} [:i.icon-comments {:key "i"}]]
           [:a.sidebar-toggle.button.right {:key "right"
                                            :href "#"
                                            :on-click #(put! comm [:right-sidebar-toggled])} [:i.icon-reorder {:key "i"}]]
           [:a.logo
            {:key "logo"
             :href "#/"
             :on-click (constantly false)}
            [:img
             {:key "logo-img"
              :src "/assets/images/logo.png",
              :alt "Omchaya"
              :title "Omchaya - A Kandan Client"}]]]
          [:div#channels {:key "channels"}
           [:div.channels-pane {:key (str "channels-" (:id channel))
                                :id (str "channels-" (:id channel))
                                :class (when (:selected channel) "active")}
            [:div.paginated-activities {:key "paginated-actvitied"}
             (when (:loading-more-messages channel)
               [:div.pagination {:key "pagination"}
                [:i.icon-spinner.icon-spin.icon-2x {:key "i"}]
                "Loading previous messages"])
             (activities-list filtered-activities opts)]
            (chatbox comm opts)]]])))))
 
