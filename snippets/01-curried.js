const R = require('ramda');

// `prop` takes two arguments. If I just give it one, I get a function back
const moo = R.prop('moo');
// when I call that function with one argument, I get the result.
const value = moo({moo: 'cow'}); // => 'cow'

console.log(value);
