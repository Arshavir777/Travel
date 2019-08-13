import { configure, init, getLocale } from 'i18n';

configure({
  // setup some locales - other locales default to en silently
  locales:[ 'am', 'en', 'ru'],
  register: global,

  // where to store json files - defaults to './locales' relative to modules directory
  directory: __dirname + '/locales',
  
  defaultLocale: 'en',
  
  // sets a custom cookie name to parse locale settings from  - defaults to NULL
  cookie: 'lang',
});
