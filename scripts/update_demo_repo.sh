#!/bin/bash

git checkout demo
git merge master
lein clean
lein cljsbuild clean
lein cljsbuild once
git add omchaya.dev.js out omchaya.prod.js omchaya.prod.js.map
