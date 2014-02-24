(defproject omchaya "0.1.0-SNAPSHOT"
  :plugins [[com.cemerick/clojurescript.test "0.2.2"]
            [hiccup-bridge "1.0.0-SNAPSHOT"]
            [lein-cljsbuild "1.0.2"]]
  :description "An example Om/ClojureScript chat application"
  :url "http://github.com/sgrove/omchaya"

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

  :cljsbuild {:test-commands {"unit-tests" ["runners/phantomjs.js" :runner
                                            "window.literal_js_executed=true"
                                            "test-cljs/vendor/es5-shim.js"
                                            "test-cljs/vendor/es5-sham.js"
                                            "test-cljs/vendor/console-polyfill.js"
                                            "resources/private/js/unit-test.js"]} 
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "omchaya.dev.js"
                                   :output-dir "out/dev"
                                   :optimizations :none
                                   :source-map true}}
                       {:source-paths ["src"
                                       "test-cljs"]
                        :id "test"
                        :compiler {:pretty-print true
                                   :output-dir "resources/private/js/"
                                   :output-to "resources/private/js/unit-test.js"
                                   :preamble ["react/react.js"]
                                   :externs ["react/externs/react.js"]
                                   :optimizations :whitespace}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "omchaya.prod.js"
                                   :output-dir "out/prod"
                                   :optimizations :advanced
                                   :source-map "omchaya.prod.js.map"
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
