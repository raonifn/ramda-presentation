const R = require('ramda');

R.gt(2, 1); //=> true
R.gt(2, 2); //=> false
const isGreaterThanTwo = R.gt(R.__, 2);
console.log(isGreaterThanTwo(1)); // => false
console.log(isGreaterThanTwo(3)); // => true
