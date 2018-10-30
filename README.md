# ua-spy

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]

A parser for user agent to simple js object

## Features

- [x] default plenty rules
- [x] support custom rules
- [x] add add SDK

## How to use

### Install
```
npm i ua-spy -S
```

### Example

```js
const { detectAll } = require('ua-spy')

const parse = detectAll()

const all = parse('Mozilla/5.0 (Linux; Android 5.1.1; vivo X6S A Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044207 Mobile Safari/537.36 MicroMessenger/6.7.3.1340(0x26070332) NetType/4G Language/zh_CN Process/tools')
console.log('result is', all)
/*
{
  "os": {
    "name": "Android",
    "version": "5.1.1"
  },
  "app": {
    "name": "na",
    "version": "-"
  },
  "browser": {
    "name": "Chrome",
    "version": "57"
  },
  "device": {
    "name": "vivo",
    "version": "X6S"
  },
  "sdk": {
    "name": "na",
    "version": "-"
  }
}
*/

const patchParser = detectAll({
  osPatches: [
    ['MYOS', /\bMYOS ([\d.]+)/],
  ],
  appPatches: [
    ['TAOBAO', /\bTB\/([\d.]+)/]
  ],
  browserPatches: [
    ['UC', /\bMYUC ([\d._]+)/]
  ],
  devicePatches: [
    ['YEJIDEVICE', /\bYEJIDEVICE ?([\d.]+)/]
  ],
  sdkPatches: [
    ['YOURKIT', /\bYOURKIT ?([\d.]+)/]
  ],
})

const MY_UA = 'MYOS 3.3.3 Mozilla/5.0 YEJIDEVICE 1.1.1 (iPhone; CPU iPhone OS 11_4 like Mac OS X) TB/1.1.1 MYUC 2.0  AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 YOURKIT 2.2.2'
console.log('result is', patchParser(MY_UA))

/*
{
  "os": {
    "name": "MYOS",
    "version": "3.3.3"
  },
  "app": {
    "name": "TAOBAO",
    "version": "1.1.1"
  },
  "browser": {
    "name": "UC",
    "version": "2.0"
  },
  "device": {
    "name": "YEJIDEVICE",
    "version": "1.1.1"
  },
  "sdk": {
    "name": "YOURKIT",
    "version": "2.2.2"
  }
}
*/
```
## License

  MIT

[npm-image]: https://img.shields.io/npm/v/ua-spy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ua-spy
[travis-image]: https://travis-ci.org/xiekw2010/ua-spy.svg?branch=master
[travis-url]: https://travis-ci.org/xiekw2010/ua-spy
[codecov-image]: https://codecov.io/gh/xiekw2010/ua-spy/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/xiekw2010/ua-spy
[license-image]: http://img.shields.io/npm/l/ua-spy.svg?style=flat-square
[license-url]: LICENSE
