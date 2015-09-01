module.exports = function (number) {
  if (typeof number !== 'number') {
    throw 'to-digits expects a number';
  }

  return String(number).split('').map(Number);
};
