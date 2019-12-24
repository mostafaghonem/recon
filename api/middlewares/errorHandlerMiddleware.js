/* eslint-disable no-param-reassign */
// TODO: review

const createError = require('http-errors');

// catch 404 and forward to error handler
module.exports.catch404Errors = (req, res, next) => {
  next(createError(404));
};

// eslint-disable-next-line no-unused-vars
module.exports.handleUnexpectedErrors = (err, req, res, _next) => {
  err.code = +err.statusCode || +err.code || 500;
  err.url = req.originalUrl;

  const error = err;

  // TODO: https://www.joyent.com/node-js/production/design/errors

  if (err.code < 100 || err.code >= 600) error.code = 500;

  if (process.env.NODE_ENV === 'development')
    // eslint-disable-next-line no-undef
    logger.error(
      JSON.stringify(
        err,
        [
          'messageKey',
          'message',
          'stack',
          'url',
          'name',
          'code',
          'Symbol(message)'
        ],
        3
      )
    );

  if (!(error.code >= 100 && error.code < 600)) error.code = 500;

  return res
    .status(error.code)
    .json({ error: err.message || 'Internal server error...' });
};
