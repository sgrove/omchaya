(ns omchaya.macros)

(defn normalize-return-map [out-map return-map state]
  (let [ks (keys return-map)
        vs (vals return-map)
        defaults {:render? true}]
    (into {} (map (fn [rk rv]
                    (let [verbose-return? (and (map? rv)
                                               (:value rv)
                                               (:path rv))
                          out-entry (get out-map rk)
                          affected-path (or (when verbose-return?
                                              (:path rv))
                                            (:path out-entry))
                          old-value (get-in state affected-path)]
                      [rk (if verbose-return?
                            (merge defaults
                                   {:path affected-path}
                                   (rk out-map)
                                   rv {
                                       :old-value old-value
                                       :new-value (:value rv)})
                            (merge defaults
                                   {:path affected-path}
                                   (rk out-map)
                                   {:old-value old-value
                                    :new-value rv}))])) ks vs))))
