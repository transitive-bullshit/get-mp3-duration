# get-mp3-duration

> Computes the duration of an mp3 buffer in node or browser.

[![NPM](https://img.shields.io/npm/v/get-mp3-duration.svg)](https://www.npmjs.com/package/get-mp3-duration) [![Travis CI Build](https://travis-ci.org/transitive-bullshit/get-mp3-duration.svg?branch=master)](https://travis-ci.org/transitive-bullshit/get-mp3-duration) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save get-mp3-duration
# or
yarn add get-mp3-duration
```

## Usage

```js
const getMP3Duration = require('get-mp3-duration')
const buffer = fs.readFileSync('fixtures/vbr.mp3')
const duration = getMP3Duration(buffer)

console.log(duration, 'ms') => 285727 ms
```

## Related

- [mp3-duration](https://github.com/ddsol/mp3-duration) this package is a fork of mp3-duration to add browser support.
- [vmsg](https://github.com/Kagami/vmsg) is an optimized mp3 recorder for the web which ports the lame mp3 encoder to wasm.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
