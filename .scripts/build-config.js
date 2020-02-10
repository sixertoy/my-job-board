const fs = require('fs');
const path = require('path');

// TODO passer un emmid au script
// et compilé un fichier specifique dans un des dossier
// tags, menus, themes
const DEFAULTS_TAGS = require('../configs/tags/_defaults.json');
const DEFAULTS_MENUS = require('../configs/menus/_defaults.json');
const DEFAULTS_THEME = require('../configs/themes/_defaults.json');

const pkg = require('../package.json');
const misc = require('../configs/misc.json');
const views = require('../configs/views.json');
const dates = require('../configs/dates.json');
const features = require('../configs/features-toggler.json');
const notifications = require('../configs/toast-notifications.json');

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

// build des themes/tags specifiques pour cette EMMID
const tags = { ...DEFAULTS_TAGS };
const menus = { ...DEFAULTS_MENUS };
const themes = { ...DEFAULTS_THEME };

// merge manifest variables
const pkgConfig = pickupConfigFromPackageJSON();
const manifestJSON = JSON.stringify({
  ...pkgConfig,
  ...misc,
  ...tags,
  ...menus,
  ...themes,
  ...views,
  ...features,
  ...dates,
  ...notifications,
});

// write manifest file
const outputFile = path.join(__dirname, '..', 'src', 'manifest.build.json');
fs.writeFileSync(outputFile, manifestJSON, { encoding: 'utf-8' });
