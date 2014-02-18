(ns omchaya.controllers.post-api
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [omchaya.commands :as commands]
            [omchaya.ui :as imp-ui]
            [omchaya.useful :as useful :refer [ffilter]]))

(defn notify-if-mentioned! [activity state]
  (let [current-user (get-in state [:users (:current-user-email state)])
        comm (get-in state [:comms :controls])]
    (when (and (not= (:email current-user) (:author activity))
           (ffilter (fn [piece]
                      (let [[_ pre username post] (re-find #"(.*)@(\w+)(.*)" piece)]
                        (= username (:username current-user))))
                    (string/split (:content activity) #" ")))
      (put! comm [:current-user-mentioned [activity "/assets/audio/threetone-alert.wav"]]))))

(defmulti post-api-event!
  (fn [target message previous-state current-state] message))

(defmethod post-api-event! :default
  [target message previous-state current-state]
  (print "No post-api handler for: " message))

(defmethod post-api-event! :channel-activity-received
  [target message activity previous-state current-state]
  (commands/handle-maybe-command target activity current-state)
  (when (= (:channel-id activity) (:selected-channel current-state))
    (js/setTimeout #(imp-ui/scroll-to-latest-message-when-appropriate! target (:channel-id activity)) 35)
    (when (or (:live? activity) true)
      (notify-if-mentioned! activity current-state))))
