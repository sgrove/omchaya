(ns omchaya.components.audio-player
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(defn player [audio-data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      "AudioPlayer")
    om/IRender
    (render [this]
      (let [{:keys [sfx player audio-settings id]} audio-data
            audio-source (:source-url player)
            comm (get-in opts [:comms :controls])]
        (html/html
         [:div {:react-key id
                :key id
                :style #js {:display "none"}}
          [:audio.audio-player
           (merge {:src audio-source
                   :key (str "audio-" id)
                   :class (str "audio-" id)}
                   (when (:muted audio-settings)
                     {:muted true}))]
           [:audio.audio-player.sfx
            (merge {:src (:source-url sfx)
                    :key (str "sfx-" id)
                    :class (str "audio-" id)}
                   (when (:muted audio-settings)
                     {:muted true}))]])))))
