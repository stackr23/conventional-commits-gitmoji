#/bin/bash
#
# TBD: refactor: build scripts with ? nodemon | rollup | backpack?
npx babel ./src/index.js --out-file ./dist/index.js --source-maps inline --presets minify
npx babel ./src/extendGitmoji.js --out-file ./dist/extendGitmoji.js --source-maps inline --presets minify
