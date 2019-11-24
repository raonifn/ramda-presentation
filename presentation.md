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
npm install ramdajs
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
 { name: 'Buzz', errors: R.isEmpty })=);
```
    

## Curry ##

**Haskel Curry**

```javascript
// Normal function
const aFunc = (a, b, c) => a * b + c;
aFunct(1, 2, 3); // => 5

//Curried function
const anotheF = a => b => c => a * b + c;
anotherF(1)(2)(3); // => 5

const ramdaCurryF => R.curry((a, b, c) => a * b + c);
ramdaCurryF(1, 2, 3); // => 5
ramdaCurryF(1, 2)(3); // => 5
ramdaCurryF(1)(2, 3); // => 5
ramdaCurryF(1, 2); // => a function
```

### Namely specialisation ###

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

### Namely composition ###

```javascript
const increment = x => x + 1
const double = x => x * 2
const doublePlusOne = x => increment(double(x))
doublePlusOne(10); // => 21

const twicePlusOne = R.compose(R.add(1), R.multiply(2));
twicePlusOne(10); // => 21
```

## Composition ##

#### Pipe to the rescue ####

```javascript
const mathPipe = R.pipe(
  R.multiply(4),
  R.add(2),
  R.divide(2));
mathPipe(10); // => 21
```


## References ##

 * <https://itnext.io/a-beginners-guide-to-ramda-part-1-7e4a34972e97>
 * <https://itnext.io/a-beginners-guide-to-ramda-part-2-lenses-62bdd3993598>
 * <http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda>
 * <https://fr.umio.us/why-ramda/>
 * <https://hughfdjackson.com/javascript/why-curry-helps/>

# Thanks! #

```
XSXXSXXSS@t:%ttttt;:;;;;::::.:.....:.:.:.:.:.:.:.:.:::::.:::
XSXSXXXSS@S:tt;;.:::::::.:%;....:.....:.:.:.:.:.:.::.:.:::.:
XSXXX@XXS8@;%t;;;;:;;:tS 8;88%................:.::.::.:.:.:.
XXX8XXX@X@8:%:::::.: 88.XS%%8. ::tt;tt;;S;.;S%t::%%%%:;S%%Xt
XXXSXXXXXX8.;t;::::.8X;X;tX%%@t8t.::::..:.:.::.:.:.::.::::.:
XSXXXXXXXS8:%t;::::;t:t@@t%@%8Xt@@:;tt;......:.:.:.:.:::.::.
@SXSXSSSSS8;%%:;:; . ;@@@Xt%@@8X ; :%t .:..:.:.:.:.::::.::.:
XSXXSXSS@S8.;::.;.t%:@@88@8888X8S; .............:...:.::.:..
@XXXSSSS8%:8  8t8@X%8@@88@8@X8Xt:;;;;t::;;.;tt;::;ttt:;t;t%t
@XXXX@@XX8;8888@8888S@@@S@88ttt:;::.. .........:::::. .:.:.:
@X8SSXS8X@8@@@8XX8@8S@8St%@ ;t.::::.......:...:.S  .8X:::.:.
@XXXXX@%@SX@@888%888X;;.8X..:::::::::::::::::; SS;Xtt8Xt:;;;
@SX@@@X@%XX@@8@88t%SXt%t;;:::.:.............. S 8;%%%X@8.:::
@SSXX8t@XSXX@88888@@8@;:;:::::::::...:...:..::.  8..8S8;::.:
@SSSS8tSt@X@@@88@8XX@@%%;;:::::::::::.:.:.:..:: .8SStX@8 S .
@SXXX8S@%XSX888S8%XS88..t;:::::::::.:::.:.:.::: .@88@S.;  @8
@SSXS@Xt@t@S@@@Xt8SS88 ;%;:;;;;:::::::::.::::::.;8X88; t.;:8
X8t;tXXXt8;X@8888@8@X@XXX@ t@S%%%tt%S8::;:.t888S88;t8XXtXX:%
S:;;;@XX@tXt@@8@@8%ttttttttS%@t@t88S:;X@@8; t: :tt8;8888.8@t
t;;:;@XXXXXXSX@@%XtSt%%%%%t;%8@%8tXX@@X8tt;@;tt @8;888S:S8:.
S;:;:X8@X%@t@%X;%tttS;%%%%%XtS@%@XSXSXXSSXtS;S;8 8t8X S:S@8@
St;;:t8Xt@tXSt%%%%%%;tt%XttSStSXt%%%%%%%%t8t%t. 88 Stt;;XXtX
@8:;;tS@@S@ttXtX;t%%tt%t;%%t%@tXt8X@XSSXS@@8@S@%8S88%%S%X8;S
88t;;;S@X@tXtt%%tt%t%%SXtXXt@t%t@;ttt%%t@88S@@88tX88@SXX88  
8X8;;;ttSStt%S%t%tt%tttX;Xt%8%%@:%ttXtX%SS S@@@@8tX8@SS8.8@%
@@8tt;X%%%%%SStt%t%t%@%t8;@Xt%8;SttS;%%S88:%..;tS8X.8@@888% 
@888;ttS%Xttttt%t%t%@;@X;8t;SX%8;%ttX%X;@@SXXSXX%;S:8888@%::
t@@88@@tt;%%%ttttt8X;8;;@;ttXS8:t%X;t%t%t8@@@ttt;8@8@@8@@88 
;8@S8X:tt%ttttt%tt;ttS;SS;t888;tStt%%X;%t@888@8@ ..%8XXXX8; 
:;;S8@S:;ttt;ttttt%tt;t;;X@X::tttt8XX@8X;%:8X@@%.8%.  .:;:XS
8SSXS;.;ttt;tttttttttt%tt88@:;tt%%@SXS. :88SXSSX:.8 S %  tXS
S;tt;;;ttt;tttttttt%t%ttt;t;tt%%%%tt;;XX88:X%%S%t;;@888@@t%%
SX8XSX888@XXXStXtt%%tttttt;t%t%%X@@88888@.ttt%ttt;::....::tt
@X@@@888888888@8@@88888@%X;;%%88@888888@%8t;;;;;;;:::;:;:;::
8888SX8888@88888@@@@8@@@X@X@@@88@@888@XX:t;;:::;::::::.:::::
S%@@@tX8@88@88@@XX@@@@X@@XXS@@@@@@@8@@@t ::::::.:...... ..:%
```
