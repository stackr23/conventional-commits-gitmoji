#/bin/bash

rm dist/ -rf
mkdir dist
npx babel ./src/*.js --out-dir ./dist/ --source-maps inline --presets minify
