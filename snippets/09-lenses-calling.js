const R = require('ramda');

const person = {
  name: 'Bev',
  gender: 'female'
};
const addMs = (name) => `Ms. ${name}`;
const nameLens = R.lensProp('name');
console.log(R.over(nameLens, addMs, person));
/* => {
    name: 'Ms. Bev',
    gender: 'female'
  }
*/
