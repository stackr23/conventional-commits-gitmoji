#/bin/bash
#
rm dist/ -rf
mkdir dist
npx babel ./src/index.js --out-file ./dist/index.js --source-maps inline --presets minify
npx babel ./src/extendGitmoji.js --out-file ./dist/extendGitmoji.js --source-maps inline --presets minify
