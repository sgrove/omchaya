(ns omchaya.components.main-area
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [omchaya.datetime :as dt]
            [omchaya.plugins :as plugins]
            [omchaya.components.stack-panel :as stack-panel]
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
  [:div.activity {:key (str "activity-" (:id activity) "-" (:created_at activity))
                  :id (str "activity-" (:id activity))
                  :class (when (= current-user-email (:email author)) "current_user")
                  :onScroll #(js/console.log "Activity container scroll")}
   [:span.posted_at {:key "posted-at"} (str (dt/time-ago (:created_at activity)) " ago")]
   (utils/gravatar-for (:email author))
   [:div.readable {:key "readable"}
    [:span.user {:key "user"}
     (or (:full-name author)
         (:email author))]
    [:span.content
     {:key "content"
      :onClick #(js/console.log "Activity content click")
      :onScroll #(js/console.log "Activity content scroll")}
     (activity-content current-user-email users settings author activity)]]
   (map (fn [media]
          [:div.media-entry
           {:key "media-entry"}
           media])
        (remove string? (-> (string/split (:content activity) delimiter-re)
                            plugins/image-embed
                            plugins/youtube-embed
                            plugins/vimeo-embed)))])

(defn activity-entry-com [activity owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      "ActivityEntry")
    om/IRender
    (render [_]
      (let [current-user-email "sean@bushi.do"
            users []
            settings {}
            author {:email (:author activity)}]
        (html/html
         [:div.activity {:key (str "activity-" (:id activity) "-" (:created_at activity))
                         :id (str "activity-" (:id activity))
                         :class (when (= current-user-email (:email author)) "current_user")
                         :onScroll #(js/console.log "Activity container scroll")}
          [:span.posted_at {:key "posted-at"} (str (dt/time-ago (:created_at activity)) " ago")]
          (utils/gravatar-for (:email author))
          [:div.readable {:key "readable"}
           [:span.user {:key "user"}
            (or (:full-name author)
                (:email author))]
           [:span.content
            {:key "content"
             :onClick #(js/console.log "Activity content click")
             :onScroll #(js/console.log "Activity content scroll")}
            (activity-content current-user-email users settings author activity)]]
          (map (fn [media]
                 [:div.media-entry
                  {:key "media-entry"}
                  media])
               (remove string? (-> (string/split (:content activity) delimiter-re)
                                   plugins/image-embed
                                   plugins/youtube-embed
                                   plugins/vimeo-embed)))])))))

(defn chatbox [comm opts]
  [:div.chatbox [:textarea.chat-input
                 (merge
                  {:on-focus #(put! comm [:user-message-focused])
                   :on-blur #(put! comm [:user-message-blurred])
                   :on-key-up #(if (= (.. % -which) 13)
                                 (put! comm [:user-message-submitted])
                                 (put! comm [:user-message-updated (.. % -target -value)]))}
                  (when-not (:input-focused? opts)
                    {:value (:input-value opts)}))]
   [:button.post {:on-click #(put! comm [:user-message-submitted])} "Post"]])

(defn activities-list [filtered-activities opts]
  (map #(let [author (get-in opts [:users (:author %)])]
          (activity-entry (:current-user-email opts)
                          (:users opts)
                          (:settings opts)
                          author
                          %))
       filtered-activities))

(defn main-area [{:keys [channel search-filter] :as state} owner opts]
  (reify
    om/IRender
    (render [this]
      (html/html
       (let [comm       (get-in opts [:comms :controls])
             sp-comm    (get-in opts [:comms :sp])
             re-filter  (when search-filter (js/RegExp. search-filter "ig"))
             activities (:activities channel)
             filtered-activities (if re-filter
                                   (filter #(.match (:content %) re-filter) activities)
                                   activities)]
         [:article.main-area
          [:header.header
           [:a.nav-toggle.button.left {:href "#"
                                       :on-click #(put! comm [:left-sidebar-toggled])} [:i.icon-comments]]
           [:a.sidebar-toggle.button.right {:href "#"
                                            :on-click #(put! comm [:right-sidebar-toggled])} [:i.icon-reorder]]
           [:a.logo
            {:href "#/"
             :on-click (constantly false)}
            [:img
             {:src "/assets/images/logo.png",
              :alt "Omchaya"
              :title "Omchaya - A Kandan Client"}]]]
          [:div#channels
           [:div.channels-pane {:id (str "channels-" (:id channel))
                                :class (when (:selected channel) "active")}
            (om/build stack-panel/stack-panel (om/graft {:title "StackPanel"
                                                         :scroll-position 0
                                                         :vp-height 1228
                                                         :vp-class "paginated-activities"
                                                         :item-com activity-entry-com
                                                         :items (sort-by :created_at filtered-activities)
                                                         :item-options opts}
                                                        channel)
                      {:opts {:comm sp-comm
                              :item-height-best-guess 65}})
            (chatbox comm opts)]]])))))
 

(comment
  (when (:loading-more-messages channel)
    [:div.pagination {:key "pagination"}
     [:i.icon-spinner.icon-spin.icon-2x {:key "i"}]
     "Loading previous messages"]))
