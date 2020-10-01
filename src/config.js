const DEFAULT_ENV = 'development';
const envFromBrowser = locationMatch(/\W?env=(\w+)/);
const envFromShell = process.env.NODE_ENV;
const env = envFromBrowser || envFromShell || DEFAULT_ENV;

if (!env.match(/^(production|staging|development)$/)) {
  throw new Error(`Error: Invalid Environment - ${env}`);
}

function locationMatch(regex) {
  var match;
  const { location } = window
  if (typeof location !== 'undefined' && location !== null) {
    match = location.search.match(regex);
  }
  return (match && match[1]) ? match[1] : undefined;
}

const baseConfig = {
  development: {
    dbEndpoint: 'https://mapping-viz-functions-staging.azurewebsites.net/api'
  },
  production: {
    dbEndpoint: 'https://mapping-viz-functions.azurewebsites.net/api'
  },
};

const config = baseConfig[env];

export { env, config };