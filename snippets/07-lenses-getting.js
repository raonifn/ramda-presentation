const R = require('ramda');

const game = {
  name: 'Keep Talking and Nobody Explodes',
  genres: ['Puzzle', 'VR'],
  publisher: {
    name: 'Steel Crate Games',
    location: 'Ottawa, Canada'
  }
};

const name = R.lensProp('name');
console.log(R.view(name, game)); // => 'Keep Talking and Nobody Explodes'

const first = R.lensIndex(0);
console.log(R.view(first, game.genres)); // => 'Puzzle'

const publisherName = R.lensPath(['publisher', 'name']);
console.log(R.view(publisherName, game)); // => 'Steel Crate Games'

// You can also reference indexes with lensPath
const firstGenre = R.lensPath(['genres', 0]);
console.log(R.view(firstGenre, game)); // => 'Puzzle'
