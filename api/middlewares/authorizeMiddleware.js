const logger = require('../startup/logger');

module.exports = permission => (req, res, next) => {
  if (!permission) {
    logger.error('missing permission');
    return res.status(555).json({ message: 'missing permission' });
  }

  const { originalUrl } = req;
  if (permission !== req.user.permission) {
    logger.error(`access denied! ${originalUrl}`);
    return res
      .status(403)
      .json({ message: 'unAuthorized to access this api ' });
  }
  return next();
};
