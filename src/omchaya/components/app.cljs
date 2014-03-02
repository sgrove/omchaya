(ns omchaya.components.app
  (:require [ankha.core :as ankha]
            [cljs.reader :as reader]
            [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [omchaya.components.audio-player :as audio]
            [omchaya.components.draggable-window :as draggable]
            [omchaya.components.key-queue :as keyq]
            [omchaya.components.navbar :as navbar]
            [omchaya.components.sidebar :as sidebar]
            [omchaya.components.main-area :as main-area]
            [omchaya.utils :as utils :refer [mprint]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(def keymap (atom nil))

(defn app [app owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      "Omchaya")
    om/IRender
    (render [this]
      (let [selected-channel        (get-in app [:channels (:selected-channel app)])
            current-user            (get-in app [:users (:current-user-email app)])
            controls-ch             (get-in app [:comms :controls])
            open-player!           #(put! controls-ch [:history-player-opened])
            message-input-focused?  (get-in app [:settings :forms :user-message :focused])
            search-input-focused?   (get-in app [:settings :forms :search :focused])
            focus-search!          #(when-not message-input-focused?
                                      (put! controls-ch [:search-focus-key-pressed]))
            inspector-path          (get-in app [:settings :inspector :path])
            inspector-path-s        (pr-str inspector-path)
            blur-current-field!    #(cond
                                     message-input-focused? (put! controls-ch [:user-message-blur-key-pressed])
                                     search-input-focused?  (put! controls-ch [:search-form-blur-key-pressed]))
            change-inspector-path! #(let [path-string (js/prompt "New path (must be edn-compatible)"
                                                                 inspector-path-s)]
                                      (try
                                        (put! controls-ch [:inspector-path-updated (reader/read-string path-string)])
                                        (catch js/Error e
                                          (mprint "Not edn-compatible: " path-string))))
            persist-local-state!   #(put! controls-ch [:state-persisted])
            restore-local-state!   #(put! controls-ch [:state-restored])
            toggle-inspector!      #(put! controls-ch [:toggle-inspector-key-pressed])
            _ (reset! keymap {"ctrl+slash" open-player!
                              "ctrl+esc"   toggle-inspector!
                              "ctrl+1"     change-inspector-path!
                              "ctrl+s"     persist-local-state!
                              "ctrl+r"     restore-local-state!
                              "slash"      focus-search!
                              "esc"        blur-current-field!})]
        (html/html
         [:div
          {:className (str (when (get-in app [:settings :sidebar :right :open]) "slide-left ")
                           (when (get-in app [:settings :sidebar :left :open]) "slide-right "))}
          (when (get-in app [:windows :window-inspector :open])
            (when-let [path (get-in app [:settings :inspector :path])]
              (om/build draggable/draggable-window
                        {:title  (str "Data Inspector: " (pr-str path))
                         :name :window-inspector
                         :window (get-in app [:windows :window-inspector])
                         :comm   (get-in app [:comms :controls])
                         :content-com ankha/inspector
                         :content-data (get-in app path)
                         :content-opts {}})))
          (om/build keyq/KeyboardHandler app {:opts {:keymap keymap
                                                     :error-ch (get-in app [:comms :error])}
                                              :react-key "keyboard-handler"})
          (map #(om/build audio/player %1 {:opts {:comms (:comms app)}
                                        :react-key (str "audio-player-" %2)})
               (map (fn [[channel-id channel]]
                      {:audio-settings (:audio app)
                       :player (:player channel)
                       :sfx (:sfx channel)
                       :id channel-id}) (:channels app))
               (range))
          (om/build sidebar/sidebar {:channel selected-channel
                                     :settings (:settings app)
                                     :search-filter (get-in app [:settings :forms :search :value])}
                    {:opts {:comms (:comms opts)
                            :users (:users app)
                            :current-user-email (:current-user-email app)
                            :selected-channel (:selected-channel app)
                            :channels (:channels app)}
                     :react-key "sidebar"})
          (om/build main-area/main-area {:channel selected-channel
                                         :search-filter (get-in app [:settings :forms :search :value])}
                    {:opts {:comms (:comms opts)
                            :users (:users app)
                            :current-user-email (:current-user-email app)
                            :input-focused? (get-in app [:settings :forms :user-message :focused])
                            :input-value (get-in app [:settings :forms :user-message :value])}
                     :react-key "main-area"})
          (om/build navbar/navbar
                    (select-keys app [:channels :settings])
                    {:opts {:comms (:comms opts)}
                     :react-key "navbar"})
          [:div#at-view.at-view [:ul#at-view-ul]]])))))
