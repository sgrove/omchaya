# Omchaya

A [ClojureScript](https://github.com/clojure/clojurescript) + [Om](https://github.com/swannodette/om) frontend for [Kandan](http://kandanapp.com/). An example app that's actually useful.

## Getting the project

    git clone https://github.com/sgrove/omchaya.git
    cd omchaya

## Example usage

Omchaya is just for local usage right now. Try a couple of commands:

    @mention-a-name
    /play <url to an audio-tag-compatible source (mp3, etc.)>
    rgb(r,g,b)
    #hheexx or #hex
    Any youtube/vimeo/img/link will be picked up
    Basic pastie support is there

### I don't have Clojure, but I still want to see it!

Use the demo branch:

    git checkout demo
    ./run_server.sh
    open http://localhost:9000/dev.html

## Running locally

    ./run_server.sh

This will compile the CLJS code to JS once and start the server hosting the assets.

## Developing locally

Start the auto recompiler for the CLJS code:

    lein cljsbuild auto

Serve the assets:

    python -m SimpleHTTPServer 9000
    open http://localhost:9000/dev.html
