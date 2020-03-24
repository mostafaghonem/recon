const express = require('express');

const app = express();

require('dotenv').config({ path: `${process.env.NODE_ENV}.env` });

const dbConfig = require('./startup/db');
const handleErrorsConfig = require('./startup/handleErrors');
const middlewaresConfig = require('./startup/middlewares');
const routesConfig = require('./startup/routes');

module.exports = async () => {
  dbConfig.connect();
  handleErrorsConfig();
  middlewaresConfig(app);
  await routesConfig(app);

  return app;
};
