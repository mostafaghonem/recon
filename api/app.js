const express = require('express');

const { logger } = require('./startup/logging');

const app = express();

app.get('/', (req, res) => {
  res.send('blaaaaaaaa');
});

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
global.Promise = require('bluebird');
global._ = require('lodash');

global.logger = logger;

require('./startup/db').connect();
require('./startup/logging').handleErrors();
require('./startup/middlewares')(app);
require('./startup/routes')(app);

module.exports = app;
