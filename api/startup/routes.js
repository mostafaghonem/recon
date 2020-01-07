const ErrorHandler = require('../middlewares/errorHandlerMiddleware');

const User = require('../components/User');

module.exports = app => {
  app.use('/api/user', User.Router);

  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
