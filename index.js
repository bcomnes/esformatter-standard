var deepMixIn = require('mout/object/deepMixIn')
var standardPreset = require('./node_modules/standard-format/rc/esformatter.json')

exports.standardPreset = standardPreset

exports.setOptions = function (opts) {
  deepMixIn(opts, standardPreset)
}
