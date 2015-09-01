var toDigits = require('./index.js');

toDigits.should.be.a.function;
toDigits(123).should.deeply.equal([1, 2, 3]);
toDigits('hello').should.throw.a.TypeError;
