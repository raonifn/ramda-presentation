const R = require('ramda');

const person = {
  name: 'Terry',
  cats: [{
    name: 'Korin',
    age: 4
  }, {
    name: 'Sweep',
    age: 3
  }, {
    name: 'Catarina',
    age: 2
  }]
};

const double = R.multiply(2);
const cats = R.lensProp('cats');
const age = R.lensProp('age');
const doubleCatsAge = R.over(
  cats, 
  R.map(R.over(age, double))
);

console.log(doubleCatsAge(person));
/* => {
    name: 'Terry',
    cats: [{
      name: 'Korin',
      age: 8
    }, {
      name: 'Sweep',
      age: 6
    }, {
      name: 'Catarina',
      age: 4
    }]
  }
*/
