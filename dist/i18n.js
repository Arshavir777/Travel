"use strict";

var _i18n = require("i18n");

(0, _i18n.configure)({
  // setup some locales - other locales default to en silently
  locales: ['am', 'en', 'de'],
  register: global,
  // where to store json files - defaults to './locales' relative to modules directory
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  // sets a custom cookie name to parse locale settings from  - defaults to NULL
  cookie: 'lang'
});