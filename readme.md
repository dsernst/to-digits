# to-digits

[![NPM Version](https://img.shields.io/npm/v/to-digits.svg)](https://www.npmjs.com/package/to-digits)
[![Build Status](https://travis-ci.org/dsernst/to-digits.svg?branch=master)](https://travis-ci.org/dsernst/to-digits)

Converts a number to an array of its digits.

## Install

```
$ npm install to-digits
```

```js
var toDigits = require('to-digits');
```

## Usage

#### toDigits(number)

```js
toDigits(7654); // [7, 6, 5, 4]
```

#### toDigits.extend

Use this to extend the native Number.prototype:

```js
Number.prototype.toDigits = toDigits.extend

console.log((456).toDigits()) // [4, 5, 6]
```
