const R = require('ramda');

const game = {
  name: 'Dead Nation',
  genres: ['Twin Stick Shooter', 'Shoot em up'],
  publisher: {
    name: 'Sony Interactive',
    location: 'California, USA'
  }
};
const reverse = R.pipe(R.split(''), R.reverse, R.join(''));
const name = R.lensProp('name');
const publisherName = R.lensPath(['publisher', 'name']);
const genres = R.lensProp('genres')
const mods = R.compose(
  R.set(name, 'Alienation'),
  R.over(publisherName, R.toUpper),
  R.over(genres, R.map(reverse))
);
console.log(mods(game));
/* => {
    name: 'Alienation',
    genres: ['retoohS kcitS niwT', 'pu me toohS'],
    publisher: {
      name: 'SONY INTERACTIVE',
      location: 'California, USA'
    }
  }
*/
