(ns omchaya.useful)

(defn map-vals
  "Create a new map from m by calling function f on each value to get a new value."
  [m f & args]
  (when m
    (into {}
          (for [[k v] m]
            [k (apply f v args)]))))

(defn map-keys
  "Create a new map from m by calling function f on each key to get a new key."
  [m f & args]
  (when m
    (into {}
          (for [[k v] m]
            [(apply f k args) v]))))

(def ffilter
  (comp first filter))
