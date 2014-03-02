(ns omchaya.plugins
  (:require [clojure.string :as string]
            [omchaya.emoticons :as emoticons]))

(defn mention [name]
  [:span {:key "mention"} [:span.mention {:key "mention"} name] " "])

(defn mentions [activity-pieces current-user-email users settings author]
  (map (fn [piece]
         (let [[_ pre username post] (re-find #"(.*)@(\w+)(.*)" piece)]
           (if-let [at (and (string? piece)
                            (some #{username} (map (comp :username second) users)))]
             (list pre (mention username) post)
             piece)))
       activity-pieces))

(defn emoticon [emoji]
  [:img.emoticon-embed.small {:key "emoticon"
                              :src   (:src emoji)
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
                   [:a.href {:key "href"
                             :target "_blank"
                             :href link} link]
                   piece))]
    (map helper activity-pieces)))

(defn pastie [activity-pieces]
  (let [max-preview-length 300
        max-preview-lines  4
        original           (string/join " " activity-pieces)]
    (if (re-find #"\n.*\n" original)
      [[:pre.pastie {:key "pastie"}
        [:a.pastie-link {:key "href"
                         :href "#"
                         :on-click (constantly false)} "View pastie"]
        [:br {:key "br"}]
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
      (assoc-in (vec activity-pieces) [0] (:username user)))
    activity-pieces))

(defn slash-play [activity-pieces]
  ;; Should actually insert a audio player component
  (let [[command url & rest] activity-pieces]
    (if (= command "/play")
      (concat [[:strong {:key "strong"}
                [:a.audio-play "Playing " {:key "playing"}
                 [:a {:key "a"
                      :target "_blank"
                      :href url} url]]]] rest)
      activity-pieces)))

(defn rgb-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ pre r g b post] (re-find #"(.*)rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)(.*)" piece)]
           (list pre
                 [:span.color-preview
                  {:key "color-preview"
                   :style #js {:background-color (str "rgb(" r "," g "," b ")")}}]
                 post)
           piece)) activity-pieces))

(defn hex-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ pre hex post] (re-find #"(.*)#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})(.*)" piece)]
           (list pre
                 [:span.color-preview
                  {:key "color-preview"
                   :style #js {:background-color (str "#" hex)}}]
                 post)
           piece)) activity-pieces))

(defn image-embed [activity-pieces]
  (map (fn [piece]
         (if (re-find #"http.*\.(jpg|jpeg|gif|png)" piece)
           [:div.image-preview {:key "preview"}
            [:a {:key "href"
                 :target "_blank"
                 :href piece}
             [:img.image-embed {:key piece
                                :src piece}]]
            [:div.name {:key "name"} piece]]
           piece)) activity-pieces))

(defn youtube-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ video-id] (and (re-find #"https?.+www.youtube.com.+watch" piece)
                                    (re-find #"\Wv=([\w|\-]*)" piece))]
           [:div.youtube-preview {:key "youtube"}
            [:iframe {:key "iframe"
                      :width "560"
                      :height "315"
                      :src (str "http://www.youtube.com/embed/" video-id)
                      :frameBorder 0
                      :allowFullScreen true}]
            [:div.name {:key "name"} piece]]
           piece)) activity-pieces))

(defn vimeo-embed [activity-pieces]
  (map (fn [piece]
         (if-let [[_ video-id] (re-find #"^https?://vimeo.com/(\d+)" piece)]
           [:div.vimeo-preview {:key "vimeo"}
            [:iframe {:key "iframe"
                      :width "500"
                      :height "281"
                      :src (str "http://player.vimeo.com/video/" video-id)
                      :frameBorder 0
                      :webkitAllowFullScreen true
                      :mozAllowFullScreen true
                      :allowFullScreen true}]
            [:div.name {:key "name"} piece]]
           piece)) activity-pieces))
