const express = require('express');

const logger = require('./startup/logger');

const app = express();

app.get('/', (req, res) => {
  res.send('blaaaaaaaa');
});

require('dotenv').config({ path: `${process.env.NODE_ENV}.env` });

global.Promise = require('bluebird');
global._ = require('lodash');

global.logger = logger;

require('./startup/db').connect();
require('./startup/handleErrors')();
require('./startup/middlewares')(app);
require('./startup/routes')(app);

module.exports = app;
