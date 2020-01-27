const express = require('express');
const path = require('path');
const ErrorHandler = require('../middlewares/errorHandlerMiddleware');
const User = require('../components/User');

module.exports = app => {
  app.use('/', express.static(path.join(__dirname, '../../public')));
  app.use('/api/users', User.Router);
  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
