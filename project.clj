(defproject omchaya "0.1.0-SNAPSHOT"
  :plugins [[hiccup-bridge "1.0.0-SNAPSHOT"]]
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :jvm-opts ^:replace ["-Xms2G" "-Xmx4G" "-server"]

  :dependencies [[com.facebook/react "0.8.0.1"]
                 [hiccup-bridge "1.0.0-SNAPSHOT"]
                 [prismatic/dommy "0.1.2"]
                 [org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.4.1"]
                 [sablono "0.2.6"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "omchaya"
              :source-paths ["src"]
              :compiler {
                :output-to "omchaya.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
