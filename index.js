'use strict';

const config = require('./lib/config');
const globals = require('./vendor/globals');
const js = require('./vendor/js');

exports.meta = js.meta;

exports.configs = {
  all: js.configs.all,
  recommended: js.configs.recommended,
  bcoin: config
};

exports.globals = globals;
