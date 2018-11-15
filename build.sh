#/bin/bash
#
# TBD: refactor: build scripts with ? nodemon | rollup | backpack?
rm dist/* -rf

npx babel ./src/index.js --out-file ./dist/index.js --source-maps inline --presets minify
npx babel ./src/config.js --out-file ./dist/config.js --source-maps inline --presets minify
