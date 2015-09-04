/*global describe,it*/

var assert = require('assert');
var toDigits = require('./index.js');

describe('toDigits(number)', function () {

  it('splits a number into an array of its digits', function () {
    assert.deepEqual(toDigits(123), [1, 2, 3]);
  });

  it('throws a type error if input is not a number', function () {
    assert.throws(toDigits.bind(null, 'hello'));
  });

});


describe('toDigits.extend', function () {

  it('lets user extend Number.prototype', function () {
    Number.prototype.toDigits = toDigits.extend;
    assert.deepEqual((456).toDigits(), [4, 5, 6]);
  });

});
