const R = require('ramda');

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

console.log(R.view(sshServiceEnabledLens, services)); // => true
console.log(R.view(telnetServiceEnabledLens, services)); // => false
