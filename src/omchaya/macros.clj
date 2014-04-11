(ns omchaya.macros)

(defn in-spec->let-binding [in-spec]
  (->> (partition 2 in-spec)
       (mapcat (fn [[bnding spec]]
                 (conj [bnding] (concat `(get-in ~(symbol 'state)) [(:path spec)]))))
       vec))

(defmacro defaction [action-type action-name args action-spec & body]
  (let [path-bindings (in-spec->let-binding (:in action-spec))
        out-map (:out action-spec)
        return-map (last body)]
    (list 'defmethod action-type action-name
          args
          `(let ~path-bindings
             (normalize-return-map ~out-map (do ~@body) state)))))
