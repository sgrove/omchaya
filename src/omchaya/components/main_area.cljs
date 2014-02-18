(ns omchaya.components.main-area
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [omchaya.datetime :as dt]
            [omchaya.emoticons :as emoticons]
            [omchaya.utils :as utils]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(def delimiter-re #" ")

(defn mention [name]
  [:span [:span.mention name] " "])

(defn mentions [activity-pieces current-user-email users settings author]
  (map (fn [piece]
         (let [[_ pre username post] (re-find #"(.*)@(\w+)(.*)" piece)]
           (if-let [at (and (string? piece)
                            (some #{username} (map (comp :username second) users)))]
             (list pre (mention username) post)
             piece)))
       activity-pieces))

(defn emoticon [emoji]
  [:img.emoticon-embed.small {:src   (:src emoji)
                              :class (:css emoji)
                              :title (:title emoji)}])

(defn emoticons [activity-pieces]
  (let [helper (fn [piece]
                 (if (string? piece)
                   (if-let [emoji (get emoticons/known-emoticons (string/trim piece))]
                     (emoticon emoji)
                     piece)
                   piece))]
    (map helper activity-pieces)))

(defn links [activity-pieces]
  (let [helper (fn [piece]
                 (if-let [link (and (string? piece)
                                    (re-find #"https?://.*" piece))]
                   [:a.href {:target "_blank"
                             :href link} link]
                   piece))]
    (map helper activity-pieces)))

(defn pastie [activity-pieces]
  (let [max-preview-length 300
        max-preview-lines  4
        original           (string/join " " activity-pieces)]
    (if (re-find #"\n.*\n" original)
      [[:pre.pastie
        [:a.pastie-link {:href "#"
                         :on-click (constantly false)} "View pastie"]
        [:br]
        (let [preview (as-> original preview
                            (if (> (count (string/split #"\n" preview)) max-preview-lines)
                              (string/join "\n" (take max-preview-lines (string/split #"\n" preview)))
                              preview)
                            (if (> (count preview) max-preview-length)
                              (subs preview 0 max-preview-length)
                              preview))]
          (list preview (when (not= (count preview) (count original)) "...")))]]
      activity-pieces)))

(defn slash-me [activity-pieces current-user-email users]
  (if (= (first activity-pieces) "/me")
    (let [user (get users current-user-email)]
      (assoc-in activity-pieces [0] (:username user)))
    activity-pieces))

(defn slash-play [activity-pieces]
  ;; Should actually insert a audio player component
  (let [[command url & rest] activity-pieces]
    (if (= command "/play")
      (concat [[:strong
                [:a.audio-play "Playing "
                 [:a {:target "_blank"
                      :href url} url]]]] rest)
      activity-pieces)))

(defn rgb-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ pre r g b post] (re-find #"(.*)rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)(.*)" piece)]
           (list pre
                 [:span.color-preview
                  {:style #js {:background-color (str "rgb(" r "," g "," b ")")}}]
                 post)
           piece)) activity-pieces))

(defn hex-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ pre hex post] (re-find #"(.*)#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})(.*)" piece)]
           (list pre
                 [:span.color-preview
                  {:style #js {:background-color (str "#" hex)}}]
                 post)
           piece)) activity-pieces))

(defn image-embed [activity-pieces]
  (map (fn [piece]
         (if (re-find #"http.*\.(jpg|jpeg|gif|png)" piece)
           [:div.image-preview
            [:a {:target "_blank"
                 :href piece}
             [:img.image-embed {:src piece}]]]
           piece)) activity-pieces))

(defn youtube-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ video-id] (and (re-find #"https?.+www.youtube.com.+watch" piece)
                                    (re-find #"\Wv=([\w|\-]*)" piece))]
           [:div.youtube-preview
            [:iframe {:width "560"
                      :height "315"
                      :src (str "http://www.youtube.com/embed/" video-id)
                      :frameBorder 0
                      :allowFullScreen true}]]
           piece)) activity-pieces))

(defn vimeo-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ video-id] (re-find #"^https?://vimeo.com/(\d+)" piece)]
           [:div.vimeo-preview
            [:iframe {:width "500"
                      :height "281"
                      :src (str "http://player.vimeo.com/video/" video-id)
                      :frameBorder 0
                      :webkitAllowFullScreen true
                      :mozAllowFullScreen true
                      :allowFullScreen true}]]
           piece)) activity-pieces))

(defn activity-content [current-user-email users settings author activity]
  (let [content (-> (string/split (:content activity) delimiter-re)
                    pastie
                    (mentions current-user-email users settings author)
                    (slash-me current-user-email users)
                    slash-play
                    emoticons
                    links
                    rgb-embed
                    hex-embed)]
    (interpose " " content)))

(defn activity-entry [current-user-email users settings author activity]
  (list
   [:div.activity {:id (str "activity-" (:id activity))
                   :class (when (= current-user-email (:email author)) "current_user")
                   :key (:created_at activity)}
    [:span.posted_at (str (dt/time-ago (:created_at activity)) " ago")]
    (utils/gravatar-for (:email author))
    [:div.readable
     [:span.user (or (:full-name author)
                     (:email author))]
     [:span.content (activity-content current-user-email users settings author activity)]]
    (map (fn [media]
           [:div.media-entry
            media])
         (remove string? (-> (string/split (:content activity) delimiter-re)
                             image-embed
                             youtube-embed
                             vimeo-embed)))]))

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
              :alt "Omchaya"
              :title "Omchaya - A Kandan Client"}]]]
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
