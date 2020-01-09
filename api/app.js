const express = require('express');

const app = express();

require('dotenv').config({ path: `${process.env.NODE_ENV}.env` });
global.Promise = require('bluebird');

require('./startup/db').connect();
require('./startup/handleErrors')();
require('./startup/middlewares')(app);
require('./startup/routes')(app);

module.exports = app;
