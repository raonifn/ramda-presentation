const R = require('ramda');


const increment = x => x + 1
const double = x => x * 2
const doublePlusOne = x => increment(double(x))
console.log(doublePlusOne(10)); // => 21

const twicePlusOne = R.compose(R.add(1), R.multiply(2));
console.log(twicePlusOne(10)); // => 21
