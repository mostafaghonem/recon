const staticFile = require('connect-static-file');
const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const nuxtConfig = require('./nuxt');

const ErrorHandler = require('../middlewares/errorHandlerMiddleware');
const User = require('../components/User');
const Soldier = require('../components/Soldier');
const Division = require('../components/Division');

module.exports = async app => {
  app.get('/sw.js', express.static(path.join(__dirname, '../../public/sw.js')));

  app.use('/api/users', User.Router);
  app.use('/api/soldiers', Soldier.Router);
  app.use('/api/divisions', Division.Router);

  app.use(favicon(path.resolve('./public/favicon.ico')));
  app.use('/sw.js', staticFile(path.resolve('./public/sw.js')));
  // ! nuxt config
  await nuxtConfig(app);

  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
