const R = require('ramda');

const mathPipe = R.pipe(
  R.multiply(4),
  R.add(2),
  R.divide(R.__, 2));
console.log(mathPipe(10)); // => 21
