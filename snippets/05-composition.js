const R = require('ramda');

// take an object with an `amount` property
// add one to it
// find its remainder when divided by 7
const amtAdd1Mod7 = R.compose(R.modulo(R.__, 7), R.add(1), R.prop('amount'));

// we can use that as is:
console.log(amtAdd1Mod7({amount: 17})); // => 4
console.log(amtAdd1Mod7({amount: 987})); // => 1
console.log(amtAdd1Mod7({amount: 68})); // => 6

const amountObjects = [ {amount: 903}, {amount: 2875654}, {amount: 6} ]
console.log(R.map(amtAdd1Mod7, amountObjects)); // => [1, 6, 0]

// of course, `map` is also curried, so you can generate a new function
// using `amtAdd1Mod7` that will wait for a list of "amountObjects" to
// get passed in:
const amountsToValue = R.map(amtAdd1Mod7);
console.log(amountsToValue(amountObjects)); // => [1, 6, 0]
