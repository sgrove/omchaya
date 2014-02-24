(defproject omchaya "0.1.0-SNAPSHOT"
  :plugins [[hiccup-bridge "1.0.0-SNAPSHOT"]]
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :jvm-opts ^:replace ["-Xms2G" "-Xmx4G" "-server"]

  :dependencies [[ankha "0.1.1"]
                 [com.facebook/react "0.8.0.1"]
                 [hiccup-bridge "1.0.0-SNAPSHOT"]
                 [org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.4.1"]
                 [prismatic/dommy "0.1.2"]
                 [sablono "0.2.6"]
                 [secretary "1.0.0"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "omchaya.dev.js"
                         :output-dir "out/dev"
                         :optimizations :none
                         :source-map true}}
             {:id "prod"
              :source-paths ["src"]
              :compiler {:output-to "omchaya.prod.js"
                         :output-dir "out/prod"
                         :optimizations :advanced
                         :source-map "omchaya.prod.js.map"
                         :pretty-print false
                         :preamble ["react/react.min.js"]
                         :externs ["react/externs/react.js"]}}]})
