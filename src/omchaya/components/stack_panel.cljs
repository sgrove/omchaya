(ns omchaya.components.stack-panel
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(defn panel-entry [entry-data owner opts]
  (reify
    om/IDidMount
    (did-mount [c]
      (let [node (om/get-node owner)
            {:keys [comm index]} opts
            height (.. (.getBoundingClientRect node) -height)]
        ;; Use this to report back to StackPanel the rendered-height
        ;; of the component (for varying-height)
        (put! comm [index height])))
    om/IRender
    (render [_]
      (om/build (:item entry-data) (:item-data entry-data) {:opts (:item-options entry-data)}))))

(def default-vp-style
  {:overflow-y "scroll"
   :position "absolute"
   :top 0
   :left 0
   :width "100%"})

(defn recalc-offsets [all-heights]
  (reduce (fn [heights [new-height _]]
            (let [last-offset (last (last heights))
                  last-height (first (last heights))
                  curr-offset (+ last-offset last-height)]
              (if (empty? heights)
                [[new-height 0]]
                (conj heights [new-height curr-offset])))) [] all-heights))

;; Currently invoked in main_area.cljs
(defn stack-panel [panel-data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "StackPanel"))
    om/IWillMount
    (will-mount [_]
      ;; Create a channel where the item will notify us of its actual height on render
      ;; Initialize a vector with heights/offsets calculated from user-supplied best-guess.
      ;;   -> Store it in local state
      ;;   -> On notification of render and new height, recalc heights/offsets
      (let [panel-ch          (chan)
            height-best-guess (:item-height-best-guess opts)
            entry-count       (count (:items panel-data))]
        (om/set-state! owner :panel-entry-comm panel-ch)
        (om/set-state! owner :panel-entry-heights (recalc-offsets (vec (repeat entry-count [height-best-guess 0]))))
        (go (while true
              (let [[index height] (<! panel-ch)]
                (let [heights (om/get-state owner :panel-entry-heights)]
                  (om/set-state! owner :panel-entry-heights (recalc-offsets (assoc-in heights [index 0] height)))))))))
    om/IRender
    (render [this]
      (let [{:keys [vp-height vp-class user-vp-style
                    item-com items
                    item-options item-height-best-guess]} panel-data
                    ;; user-vp-style should be a clojure map
                    vp-style (clj->js (merge default-vp-style
                                             {:height vp-height}
                                             user-vp-style))
                    item-height item-height-best-guess
                    over-draw-factor 20
                    vp-scroll-offset 1000 ;; Need to get this somehow
                    M (->> (count items)
                           (* item-height)
                           (/ vp-height)
                           (* over-draw-factor)
                           (js/Math.ceil))
                    N (-> (/ vp-scroll-offset item-height)
                          (- (/ M 2))
                          js/Math.floor) ;; Draw half above, and half below
                    ;; Just to show dropping (will be a big white gap at top of channel)
                    N 10
                    ;; Child of div with overflow-y: scroll
                    vp-oversized-child-height 50000
                    ;; Channel to notify SP-com on item render
                    comm (om/get-state owner :panel-entry-comm)
                    ;; Current estimates on height/offset
                    heights (om/get-state owner :panel-entry-heights)
                    entry-opts {:comm comm}
                    ;; Render panel-entry, which renders item for us
                    render-item (fn [[idx com-data [height offset]]]
                                  (dom/div
                                   #js {:key offset
                                        :style #js {:position "absolute"
                                                    :left 0
                                                    :top offset
                                                    :width "100%"
                                                    :font-decoration "bold"}}
                                   (om/build panel-entry
                                             {:item item-com
                                              :item-data com-data
                                              :item-options item-options}
                                             {:opts (assoc entry-opts
                                                      :index idx)})))
                    ;; Put together [global-index com-data [height top-offset]]
                    idx-data-offset (map vector (range) items heights)]
        (dom/div nil
                 (dom/div #js {:className (str "stack-panel-view " vp-class)
                               :style vp-style}
                          (apply dom/div
                                 (concat [#js{:className "vp-oversized-child"
                                              :style #js {:height vp-oversized-child-height}}]
                                         ;; Render all of the
                                         ;; appropriate panel-entries
                                         ;; with items into
                                         ;; vp-oversized-child
                                         (->> idx-data-offset
                                              (drop N)
                                              (take M)
                                              (map render-item))))))))))

(comment
  (om/build stack-panel/stack-panel
            (om/graft {:title "StackPanel"
                       :scroll-position 0
                       :vp-height 1228
                       :vp-class "paginated-activities"
                       :item activity-entry-com
                       :items (sort-by :created_at filtered-activities)
                       :item-opts opts}
                      channel)
                      {:opts {:comm sp-comm
                              :item-height-best-guess 65}}))
