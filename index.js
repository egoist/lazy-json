var fs = require('fs')
var stripJSON = require('strip-json-comments')

function requireJSON (file, ignoreExtension) {
  if (!ignoreExtension && !/\.json$/.test(file)) {
    file += '.json'
  }
  return parseJSON(fs.readFileSync(file, 'utf-8'))
}

function parseJSON (string, whitespace) {
  whitespace = whitespace || true
  return JSON.parse(stripJSON(string, whitespace))
}

exports.requireJSON = requireJSON
exports.parseJSON = parseJSON
