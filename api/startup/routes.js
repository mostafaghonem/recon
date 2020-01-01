const ErrorHandler = require('../middlewares/errorHandlerMiddleware');
const Example = require('../components/Example');

module.exports = app => {
  app.use('/api/example', Example.Router);

  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
