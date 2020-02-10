const fs = require('fs');
const path = require('path');

const configs = require('../configs');
const pkg = require('../package.json');

function pickupConfigFromPackageJSON() {
  // NOTE map de certaines props du package.json
  // vers des props lisibles par l'application
  const filters = { version: 'APP_VERSION' };
  const config = Object.keys(filters).reduce((acc, key) => {
    const nextValue = pkg[key];
    const nextKey = filters[key];
    return { ...acc, [nextKey]: nextValue };
  }, {});
  return config;
}

const pkgConfig = pickupConfigFromPackageJSON();
const manifestJSON = JSON.stringify({
  ...configs,
});

// write manifest file
const outputFile = path.join(__dirname, '..', 'src', 'config.build.json');
fs.writeFileSync(outputFile, manifestJSON, { encoding: 'utf-8' });
