const ErrorHandler = require('../middlewares/errorHandlerMiddleware');

module.exports = app => {
  // app.use('/api/users-login', User.loginRouter);

  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
