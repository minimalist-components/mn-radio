#!/bin/bash

set -e

./node_modules/gulp/bin/gulp.js vendorCSS vendorJS --silent
