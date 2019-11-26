const R = require('ramda');

const formatNames = R.curry((first, middle, last) => `${first} ${middle} ${last}`);
console.log(formatNames('John', 'Paul', 'Jones')); //=> 'John Paul Jones'

const jp = formatNames('John', 'Paul'); //=> returns a function
console.log(jp('Jones')); //=> 'John Paul Jones' (Great Musician)
console.log(jp('Stevens')); //=> 'John Paul Stevens' (the Supreme Court Justice)
console.log(jp('Pontiff')); //=> 'John Paul Pontiff' (ok, so I cheated.)
console.log(jp('Ziller')); //=> 'John Paul Ziller' (magician, a wee bit fictional)
console.log(jp('Georgeandringo')); //=> 'John Paul Georgeandringo' (rockers)
