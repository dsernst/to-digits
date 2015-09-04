var isNumber = require('lodash.isnumber');

module.exports = function (number) {
  if (!isNumber(number)) {
    throw new TypeError('to-digits expects a number');
  }

  return String(number).split('').map(Number);
};

module.exports.extend = function () {
  return module.exports(this);
};
