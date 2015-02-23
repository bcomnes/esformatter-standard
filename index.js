var standardPreset = require('./node_modules/standard-format/rc/esformatter.json')

exports.standardPreset = standardPreset

exports.setOptions = function(opts) {
  opts = standardPreset
}
