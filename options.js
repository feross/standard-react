var eslint = require('eslint')
var extend = require('xtend')
var pkg = require('./package.json')

var configStandard = require('eslint-config-standard')
var configStandardJsx = require('eslint-config-standard-jsx')
var configStandardReact = require('eslint-config-standard-react')
var configStandardReactNative = require('eslint-config-standard-react-native')

var config = extend(configStandard)
config.plugins.push.apply(config.plugins, configStandardJsx.plugins)
config.plugins.push.apply(config.plugins, configStandardReactNative.plugins)

Object.keys(configStandardJsx.rules).forEach(function (key) {
  config.rules[key] = configStandardJsx.rules[key]
})

Object.keys(configStandardReact.rules).forEach(function (key) {
  config.rules[key] = configStandardReact.rules[key]
})

Object.keys(configStandardReactNative.rules).forEach(function (key) {
  config.rules[key] = configStandardReactNative.rules[key]
})

module.exports = {
  eslint: eslint,
  cmd: 'standard-react-native',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Use JavaScript Standard Style (React Native)',
  eslintConfig: {
    baseConfig: config
  },
  formatter: 'Formatting is no longer included with standard. Install it separately: "npm install -g standard-format"'
}
