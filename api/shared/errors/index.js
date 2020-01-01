const ForbiddenError = require('./ForbiddenError');
const UnauthorizedError = require('./UnauthorizedError');
const NotFoundError = require('./NotFoundError');
const ApplicationError = require('./ApplicationError');

module.exports = {
  ApplicationError,
  NotFoundError,
  ForbiddenError,
  UnauthorizedError
};
