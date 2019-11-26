const R = require('ramda');

// Normal function
const aFunc = (a, b, c) => a * b + c;
console.log(aFunc(1, 2, 3)); // => 5

//Curried function
const anotherF = a => b => c => a * b + c;
console.log(anotherF(1)(2)(3)); // => 5

const ramdaCurryF = R.curry((a, b, c) => a * b + c);
console.log(ramdaCurryF(1, 2, 3)); // => 5
console.log(ramdaCurryF(1, 2)(3)); // => 5
console.log(ramdaCurryF(1)(2, 3)); // => 5
console.log(ramdaCurryF(1, 2)); // => a function
