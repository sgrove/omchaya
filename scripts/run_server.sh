#!/bin/bash

lein cljsbuild once
python -m SimpleHTTPServer 9000
