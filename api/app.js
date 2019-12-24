const express = require('express');

const { logger } = require('./startup/logging');

const app = express();

global.Promise = require('bluebird');
global._ = require('lodash');

global.logger = logger;

require('./startup/db').connect();
require('./startup/logging').handleErrors();
require('./startup/middlewares')(app);
require('./startup/routes')(app);

module.exports = app;
