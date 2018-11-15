'use strict'

var path            = require('path'),
    pathNodeModules = path.normalize(path.resolve(__dirname, '..', 'node_modules'))

require('@babel/register')({ignore: [pathNodeModules]})
