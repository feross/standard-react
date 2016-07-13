var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'standard-react',
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  formatter: '`standard-format` is no longer included with `standard`. Try using --fix instead. Or, install `standard-format` separately: "npm install -g standard-format"',
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style (React)',
  version: pkg.version
}
