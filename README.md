# RamdaJS #

```
MMMMMXkc'.   ..,lONMMMMMMMMMMMMMMMMMMMMM
MMWKd;.          .:x0XWMMMMMMMMMMMMMMMMM
MXd'   .'. .''     ..,kNMMMMMMMMMMMMMMMM
Xc. .'.:kdcdk;..;'.   .oNMMMMMMMMMMMMMMM
l.  ;OKNWMMMN0kkc.     .xWMMMMMMMMMMMMMM
' .:OWMMMMMMMWW0;       ,x00KNWMMMMMMMMM
. .oNMMMWKkdl:;;.        ....,cdKWMMMMMM
, .oNMMNx;.....'.               .c0WMMMM
k' 'kNMWNK0Ok00d.                 'xWMMM
W0c'.,ldxxdd0Nx.   ...             ,0MMM
MMWKxlc::ld0Xx.   .o0d'      ..    .lNMM
MMMMMMMWWMMNd.   .dNMWx.    .do.    ;KMM
MMMMMMMMMMNd.   .dNMMMNd.   .od,.   .kMM
MMMMMMMMMNo.   .xWMMMMMNo.   .,;.   .oWM
MMMMMMMMNo.   .xWMMMMMMMXc.          :XM
MMMMMMMNo.   .xWMMMMMMMMMK:          'OM
MMMMMMNo.   'kWMMMMMMMMMMMK;         .oW
MMMMMXl.   'kWMMMMMMMMMMMMM0,         :X
MMMMXl.   'kWMMMMMMMMMMMMMMWO'        'O
MMMXc.   'kWMMMMMMMMMMMMMMMMWk'     . .o
MMXc.   'OWMMMMMMMMMMMMMMMMMMWx.   ;kc.:
MK:.   ,OWMMMMMMMMMMMMMMMMMMMMNd.  'dx',
K:.   'OWMMMMMMMMMMMMMMMMMMMMMMNo.  .,,;
d'...'xWMMMMMMMMMMMMMMMMMMMMMMMMK:. ..'l
```

## Who am I ##

 * **Raoni Fortes Normanton** <raoni@dextra-sw.com>
 * <https://github.com/raonifn>

 * Coder since 1996
 * Developer since 2000
 * Dextrano since 2003

## Ramda ##

<https://ramdajs.com/>
```
█████████████████████████████
██ ▄▄▄▄▄ █ ▀▀▄  ██▀█ ▄▄▄▄▄ ██
██ █   █ ███ ▄▄  ▀██ █   █ ██
██ █▄▄▄█ █ ▄▄ █  ███ █▄▄▄█ ██
██▄▄▄▄▄▄▄█ █ ▀ █ ▀ █▄▄▄▄▄▄▄██
██  ▄█▀▄▄▀   ██ ▄▀▄▄  ▄▀█  ██
██▀▄██▄█▄█▀▀█▄█▀█ █ ▄▄█ ▄█▄██
███ ▄ ▄▀▄██▄█▄ ▄█ ▀█ ▀███▀ ██
██▄▄ ▀▄▀▄███ ▀ ▄  ▄▀█▀▀ ▄█▄██
██▄▄█▄█▄▄▄  ███  █ ▄▄▄ ██▄▀██
██ ▄▄▄▄▄ █▀█ ▄█▀█▀ █▄█ ██▀ ██
██ █   █ ██▄▀▄ ▄█ ▄ ▄▄ █▀ ▄██
██ █▄▄▄█ █ ▀▀▀ ▄ ▄  █  ▄█▄▄██
██▄▄▄▄▄▄▄█▄▄███▄▄█▄▄▄██▄██▄██
█████████████████████████████
```

```bash
npm install ramda
```

```javascript
const R = require('ramda');
```

### The name ###

* They like Sheeps, and Rams.
* `Lamb` ~= `Lambda`
* Than, a grown-up `Lambda` => `Ramda`

## Topics ##

 * Why Ramda?
 * Curry
 * Composition
 * Lenses
 * More Functions
 * References

## Why Ramda? ##

 * General-purpose tookit
 * Undercore / Loadash

### Ramda vs Undercore || Loadash ###

 * Purer Functional
   * Immutability
   * No Side-effects

 * All functions are curried
   * It's easy composing functions

 * Parameter order is convinient to currying
   * Ramda takes the function first, and the data last

#### All functions are curried ####

[snippets/01-curried.js](snippets/01-curried.js)
```javascript
// `prop` takes two arguments. If I just give it one, I get a function back
const moo = R.prop('moo');
// when I call that function with one argument, I get the result.
const value = moo({moo: 'cow'}); // => 'cow'
```

##### Composing #####

[snippets/02-curring-composing.js](snippets/02-curring-composing.js)
```javascript
const increment = x => x + 1
const double = x => x * 2
const doublePlusOne = x => increment(double(x))
doublePlusOne(10); // => 21

const twicePlusOne = R.compose(R.add(1), R.multiply(2));
twicePlusOne(10); // => 21
```

#### Undescore / Loadash Style ####

```javascript
const validUsersNamedBuzz = user =>
  _.filter(users, user =>
     user.name === 'Buzz' && _.isEmpty(user.errors));
```

#### Ramda Style ####

```javascript
const validUsersNamedBuzz = R.filter(R.where(
 { name: 'Buzz', errors: R.isEmpty }));
```

## Curry ##

**Haskel Curry**

[snippets/03-curry.js](snippets/03-curry.js)
```javascript
// Normal function
const aFunc = (a, b, c) => a * b + c;
aFunc(1, 2, 3); // => 5

//Curried function
const anotherF = a => b => c => a * b + c;
anotherF(1)(2)(3); // => 5

const ramdaCurryF = R.curry((a, b, c) => a * b + c);
ramdaCurryF(1, 2, 3); // => 5
ramdaCurryF(1, 2)(3); // => 5
ramdaCurryF(1)(2, 3); // => 5
ramdaCurryF(1, 2); // => a function
```

### Namely specialisation ###


[snippets/04-namely-specialisation.js](snippets/04-namely-specialisation.js)
```javascript
const formatNames = R.curry((first, middle, last) => `${first} ${middle} ${last}`);
formatNames('John', 'Paul', 'Jones'); //=> 'John Paul Jones'

const jp = formatNames('John', 'Paul'); //=> returns a function
jp('Jones'); //=> 'John Paul Jones' (Great Musician)
jp('Stevens'); //=> 'John Paul Stevens' (the Supreme Court Justice)
jp('Pontiff'); //=> 'John Paul Pontiff' (ok, so I cheated.)
jp('Ziller'); //=> 'John Paul Ziller' (magician, a wee bit fictional)
jp('Georgeandringo'); //=> 'John Paul Georgeandringo' (rockers)
```

## Composition ##

[snippets/05-composition.js](snippets/05-composition.js)
```javascript
// take an object with an `amount` property
// add one to it
// find its remainder when divided by 7
const amtAdd1Mod7 = R.compose(R.modulo(R.__, 7), R.add(1), R.prop('amount'));

// we can use that as is:
amtAdd1Mod7({amount: 17}); // => 4
amtAdd1Mod7({amount: 987}); // => 1
amtAdd1Mod7({amount: 68}); // => 6
```

```javascript
const amountObjects = [ {amount: 903}, {amount: 2875654}, {amount: 6} ]
R.map(amtAdd1Mod7, amountObjects); // => [1, 6, 0]

// of course, `map` is also curried, so you can generate a new function
// using `amtAdd1Mod7` that will wait for a list of "amountObjects" to
// get passed in:
const amountsToValue = R.map(amtAdd1Mod7);
amountsToValue(amountObjects); // => [1, 6, 0]
```

### Pipe to the rescue ###

[snippets/06-pipe.js](snippets/06-pipe.js)
```javascript
const mathPipe = R.pipe(
  R.multiply(4),
  R.add(2),
  R.divide(R.__, 2));
mathPipe(10); // => 21
```

## Lenses ##

 * Focus in nested properties
 * Perform action over them
   * Getting a property
   * Setting a property
   * Call a function on a property
 * Immutable

### Getting ###

[snippets/07-lenses-getting.js](snippets/07-lenses-getting.js)
```javascript
const game = {
  name: 'Keep Talking and Nobody Explodes',
  genres: ['Puzzle', 'VR'],
  publisher: {
    name: 'Steel Crate Games',
    location: 'Ottawa, Canada'
  }
};

const name = R.lensProp('name');
R.view(name, game); // => 'Keep Talking and Nobody Explodes'

const first = R.lensIndex(0);
R.view(first, game.genres); // => 'Puzzle'

const publisherName = R.lensPath(['publisher', 'name']);
R.view(publisherName, game); // => 'Steel Crate Games'

// You can also reference indexes with lensPath
const firstGenre = R.lensPath(['genres', 0]);
R.view(firstGenre, game); // => 'Puzzle'
```

### Setting ###

[snippets/08-lenses-setting.js](snippets/08-lenses-setting.js)
```javascript
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

// Shallow clone
game.platforms === newGame.platforms; // => false
game.publisher === newGame.publisher; // => true
```

### Calling functions ###

[snippets/09-lenses-calling.js](snippets/09-lenses-calling.js)
```javascript
const person = {
  name: 'Bev',
  gender: 'female'
};
const addMs = (name) => `Ms. ${name}`;
const nameLens = R.lensProp('name');
R.over(nameLens, addMs, person);
/* => {
    name: 'Ms. Bev',
    gender: 'female'
  }
*/
```

### One more example ###

[snippets/10-lenses-more-example.js](snippets/10-lenses-more-example.js)
```javascript
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

doubleCatsAge(person);
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
```

### Composing Lenses ###

[snippets/11-lenses-composing.js](snippets/11-lenses-composing.js)
```javascript
const enabledLens = R.lensProp('enabled');

// Combined lenses
const sshServiceLens = R.lensProp('sshService');
const sshServiceEnabledLens = R.compose(sshServiceLens, enabledLens);

const telnetServiceLens = R.lensProp('telnetService');
const telnetServiceEnabledLens = R.compose(telnetServiceLens, enabledLens);

// Usage
const services = {
  sshService: { enabled: true },
  telnetService: { enabled: false },
};

R.view(sshServiceEnabledLens, services); // => true
R.view(telnetServiceEnabledLens, services); // => false
```

### Code, Code, Code ###

[snippets/12-lenses-code-code.js](snippets/12-lenses-code-code.js)
```javascript
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
mods(game);
/* => {
    name: 'Alienation',
    genres: ['retoohS kcitS niwT', 'pu me toohS'],
    publisher: {
      name: 'SONY INTERACTIVE',
      location: 'California, USA'
    }
  }
*/
```

## More Functions ##

 * Math
 * List
 * Object
 * Logic
 * Relation

### Math ###

 * add, subtract, divide, multiply, modulo
 * inc, dec, negate
 * mean, median, product, sum

### List ###

 * filter, map, reduce, reject, find, forEach
 * take, head, tail, nth
 * flatten, slice, append, drop, groupBy, reverse
 * includes, all, any, none

### Object ###

 * keys, values, pick, omit, prop, path
 * assoc, dissoc, merge, clone
 * invert, has, evolve

### Logic ###

 * and, or, not, both, either, complement
 * ifElse, when, unless
 * isEmpty, propSatisfies

### Relation ###

 * equals, identical, propEq, pathEq
 * max, min, clamp
 * union, difference, intersection

 * gt, gte, lt, lte
   [snippets/13-placeholder.js](snippets/13-placeholder.js)
   ```javascript
   R.gt(2, 1); //=> true
   R.gt(2, 2); //=> false
   const isGreaterThanTwo = R.gt(R.__, 2);
   isGreaterThanTwo(1); // => false
   isGreaterThanTwo(3); // => true
   ```

## References ##

 * <https://ramdajs.com/docs>
 * <https://itnext.io/a-beginners-guide-to-ramda-part-1-7e4a34972e97>
 * <https://itnext.io/a-beginners-guide-to-ramda-part-2-lenses-62bdd3993598>
 * <http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda>
 * <https://fr.umio.us/why-ramda/>
 * <https://hughfdjackson.com/javascript/why-curry-helps/>

# Thanks! #

 * <https://github.com/raonifn/ramda-presentation>
```
█████████████████████████████████
██ ▄▄▄▄▄ █▀▀ ██▀█ █▄ ▄▀█ ▄▄▄▄▄ ██
██ █   █ █▄▀██▀█ ▀█▄ ▄▄█ █   █ ██
██ █▄▄▄█ █ ▄ █  ▄ ▄▄▄▀██ █▄▄▄█ ██
██▄▄▄▄▄▄▄█ █ ▀▄█ █ ▀ █▄█▄▄▄▄▄▄▄██
██  █▄▀█▄▄▀▀█  ▄▄█▀▀██▀█ ▄▄▀▄▄▀██
██ ██▄▄ ▄▀ ▀▀  ▀▀▀█▄█▄ ▄██ ▄  ███
██ ▄▀█▄█▄█ █▄ █▄▀██▄█▀▀ ▄██▄█▄▄██
██▀▀▀█▀ ▄▀ ▄  █▀▄▀▀▀██ ▀ ▄▄ ▄ ▄██
██▄▀▀▀██▄▀█▄▄█ ▀▀▄█ ▄█ ▀▀ █▀█▄▀██
██▄██ ▀ ▄▀█▄█▄ █ ▀▀ ▀█▀ █  ██  ██
██▄██▄▄▄▄█▀ █▀▄  █ ▀▀  ▄▄▄ █ ▀▀██
██ ▄▄▄▄▄ █▄█ ▀  ▀▀▀▄▄█ █▄█ ▀▀▄███
██ █   █ █▀▄ ▄  ██▄ █▀ ▄   ▀▀ ███
██ █▄▄▄█ █▀▄▄▄▀▀▀▀▀    ▀██ ▄▄▀▄██
██▄▄▄▄▄▄▄█▄▄▄▄▄██▄█▄██▄▄▄▄▄▄█▄███
█████████████████████████████████
```
