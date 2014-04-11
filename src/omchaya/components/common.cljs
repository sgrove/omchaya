(ns omchaya.components.common
  (:require [om.core :as om]))

(def children
  :children)

(def get-app
  ::app)

(defn transform-payload [transformer paths-values app]
  (transformer (into {} (map (fn [[k [kind path-or-value]]]
                               [k (condp = kind
                                    :path (get-in app path-or-value)
                                    :value path-or-value)]) paths-values))))

(defn component-data [app com-path]
  (let [com-def (get-in app (concat [:coms] com-path))
        default-data (:default-data com-def)
        paths (get-in com-def [:paths])
        transformer (get-in com-def [:transformer])
        com-data {:data (merge default-data
                               (transform-payload transformer paths app))}]
    (merge com-def
           com-data
           {::app app})))

(defn build-child [parent-path app idx child]
  (let [child-path (conj parent-path :children idx)]
    (om/build (:com child)
              (component-data app child-path)
              {:opts {:com-path child-path}})))

(defn build-children [parent-path payload]
  (map (partial build-child parent-path (get-app payload)) (range) (:children payload)))
