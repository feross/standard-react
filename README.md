# standard-react
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://travis-ci.org/feross/standard-react.svg?branch=master
[travis-url]: https://travis-ci.org/feross/standard-react
[npm-image]: https://img.shields.io/npm/v/standard-react.svg
[npm-url]: https://npmjs.org/package/standard-react
[downloads-image]: https://img.shields.io/npm/dm/standard-react.svg
[downloads-url]: https://npmjs.org/package/standard-react

### DEPRECATED

This package (`standard-react`) is **DEPRECATED**. Supporting `standard` already takes
a ton of time. Supporting a fork isn't worth the effort, especially since this gets
less than 200 downloads per month, half of which are probably bots. There are only
a handful of extra rules this package provides anyway...

`v3.0.0` will be the last version of this package. It corresponds to the `v8.0.0`
release of standard.

If someone wants to become the new maintainer, send me an email.

### For React users

`standard` v6 removed React-specific linting rules (see: [standard/#351](https://github.com/feross/standard/issues/351), [standard/#367](https://github.com/feross/standard/issues/367), and [eslint-config-standard-react/#13](https://github.com/feross/eslint-config-standard-react/pull/13)) to make `standard` usable for folks who use React alternatives like `virtual-dom` or `deku`.

JSX is still supported in `standard` and React users are still encouraged to the main `standard` package. But if you want the old behavior back, with React-specific rules, you can use `standard-react`.

The extra rules come from [eslint-config-standard](https://github.com/feross/eslint-config-standard-react).

## Install

```bash
npm install standard-react
```

## Rules

See [Rules](http://standardjs.com/rules)

## Usage

See [Usage](http://standardjs.com/#usage).

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```markdown
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

```markdown
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
```

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
