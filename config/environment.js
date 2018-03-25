/* jshint node: true */
const AUTH_CONFIG = require('./auth0-variables');

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'auth0-ember-samples',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    contentful: {
      space: 'ynuxkx21oqsg',
      accessToken: 'b6d7bd30d147463ce276d71568fdd397ecd433bf910b4ae5494c5aa397f83845',
      previewAccessToken: '546bd49c719f46a7597a49d5418cff5842d04a426bc54c9997111b6501d79083',
      usePreviewApi: false
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'w ith-controller': true
        'ds-improved-ajax': true,
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.auth0 = {
    clientId: AUTH_CONFIG.clientId,
    domain: AUTH_CONFIG.domain,
    callbackUrl: AUTH_CONFIG.callbackUrl,
    audience: AUTH_CONFIG.apiUrl
  }

  return ENV;
};
