# Omchaya

A [ClojureScript](https://github.com/clojure/clojurescript) + [Om](https://github.com/swannodette/om) frontend for [Kandan](http://kandanapp.com/). An example app that's actually useful.

## Setup

Compile the files

    git clone https://github.com/sgrove/omchaya.git
    cd omchaya
    lein cljsbuild auto

Serve the assets:

    open http://localhost:9000/
    python -m SimpleHTTPServer 9000
