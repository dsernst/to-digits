module.exports = function (number) {
  if (typeof number !== 'number') {
    throw new TypeError('to-digits expects a number');
  }

  return String(number).split('').map(Number);
};
