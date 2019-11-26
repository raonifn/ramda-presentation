const R = require('ramda');

const game = {
  name: 'Overcooked',
  platforms: ['PS4', 'XB1', 'NS', 'PC'],
  publisher: {
    name: 'Team 17',
    location: 'Wakefield, England'
  }
};

const firstPlatform = R.lensPath(['platforms', 0]);
const newGame = R.set(firstPlatform, 'PS5', game);
/* =>
  {
    name: 'Overcooked',
    platforms: ['PS5', 'XB1', 'NS', 'PC'],
    publisher: {
      name: 'Team 17',
      location: 'Wakefield, England'
    }
  }
*/
console.log(newGame);

// Shallow clone
console.log(game.platforms === newGame.platforms); // => false
console.log(game.publisher === newGame.publisher); // => true
