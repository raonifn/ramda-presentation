# RamdaJS #

 * <https://ramdajs.com/>
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

```javascript
const R = require('ramda');
```

## Topics ##

 * Why Ramda?
 * Curry
 * Composition
 * Lens
 * More Functions
 * References

## Why Ramda? ##

 * General-purpose tookit
 * Undercore / Loadash

### Ramda vs Undercore || Loadash ###

 * Purer Functional
   * Immutability
   * Side-effects

 * All functions are curried
   * It's easy composing functions

 * Parameter order is convinient to currying
   * Ramda takes the function first, and the data last

#### All functions are curried ####

```javascript
// `prop` takes two arguments. If I just give it one, I get a function back
const moo = R.prop('moo');
// when I call that function with one argument, I get the result.
const value = moo({moo: 'cow'}); // => 'cow'
```

##### Composing #####

```javascript
// take an object with an `amount` property
// add one to it
// find its remainder when divided by 7
const amtAdd1Mod7 = R.compose(R.moduloBy(7), R.add(1), R.prop('amount'));

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
const amountsToValue = map(amtAdd1Mod7);
amountsToValue(amountObjects); // => [1, 6, 0]
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
 {
   name: 'Buzz',
   errors: R.isEmpty
 }));
 ```
    

## Curry ##

```javascript
const a = 1;
const a = (aa) => console.log('aaaa');
```


## References ##

<https://itnext.io/a-beginners-guide-to-ramda-part-1-7e4a34972e97>
<https://itnext.io/a-beginners-guide-to-ramda-part-2-lenses-62bdd3993598>
<http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda>
<https://hughfdjackson.com/javascript/why-curry-helps/>
