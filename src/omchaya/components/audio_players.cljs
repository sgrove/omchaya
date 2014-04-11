(ns omchaya.components.audio-players
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [omchaya.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

(defn player [{:keys [audio-settings active-id player comm]} owner opts]
  (let [{:keys [sfx source-url id]} player]
    (html/html
     [:div {:className (str "audio-for-" (utils/safe-sel id))
            :style #js {:display "none"}}
      [:audio.audio-player
       (merge {:src source-url
               :key (str "audio-" id)
               :class (str "audio-" id)}
              (when (or (:muted audio-settings)
                        (not= id active-id))
                {:muted true}))]
      [:audio.audio-player.sfx
       (merge {:src (:source-url sfx)
               :key (str "sfx-" id)
               :class (str "audio-" id)}
              (when (or (:muted audio-settings)
                        (not= id active-id))
                {:muted true}))]])))

(defn players [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "AudioPlayer"))
    om/IRender
    (render [this]
      (let [data (:data payload)
            {:keys [audio-settings players selected-channel]} data
            comm   (om/get-shared owner [:comms :controls])]
        (html/html
         [:div.audio-players
          (map #(om/build player (assoc %
                                   :player %
                                   :comm comm
                                   :audio-settings audio-settings
                                   :active-id selected-channel))
               players)])))))
