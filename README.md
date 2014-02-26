# Omchaya

A [ClojureScript](https://github.com/clojure/clojurescript) + [Om](https://github.com/swannodette/om) frontend for [Kandan](http://kandanapp.com/). An example app that's actually useful.

![Omchaya Screenshot](/assets/images/screenshot.png "Omchaya in action")

## Project features
* Reasonable mobile support
* Composable plugin system (Thank you real data structures!)
  * Mentions
  * Emoji
  * Youtube/Vimeo/Image embed
  * /me support
  * Inline-pastie
  * RGB/Hex color embed
* Collaborative music player and queueing system 
* Real-time narrowing search across people, media, music, and messages
* Keybindings
* Deep-linking

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

## Debug keybindings

* `ctrl-/`: Open the history player
* `ctrl-esc`: Open the state ([Ankha](https://github.com/noprompt/ankha)) inspector in an in-app window
* `ctrl-1`: Change the path to display for the state inspector window

### I don't have Clojure, but I still want to see it!

Use the demo branch:

    git checkout demo
    scripts/run_server.sh
    open http://localhost:9000/dev.html

## Running locally

    scripts/run_server.sh

This will compile the CLJS code to JS once and start the server hosting the assets.

## Developing locally

Start the auto recompiler for the CLJS code:

    lein cljsbuild auto

Serve the assets:

    python -m SimpleHTTPServer 9000
    open http://localhost:9000/dev.html

## Omchaya Approach
* Rendering all done via Om/React
* Each component sends app-logic events to router via core.async channels
* State transition managed centrally via controller
* Imperative/side-effects restricted to post-controller

![Omchaya Flow](/docs/resources/omchaya_flow.png "Omchaya Flow")

# License

Omchaya is released under the MIT license, see LICENSE for further details.

Copyright (c) 2014 BUSHIDO INC. unless otherwise mentioned.
