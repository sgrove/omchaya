(ns omchaya.components.audio-player
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(defn player [payload owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "AudioPlayer"))
    om/IRender
    (render [this]
      (let [audio-data (:data payload)
            {:keys [sfx player audio-settings id]} audio-data
            audio-source (:source-url player)
            comm (om/get-shared owner [:comms :controls])]
        (html/html
         [:div {:style #js {:display "none"}}
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
