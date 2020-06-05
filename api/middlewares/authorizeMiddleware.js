const logger = require('../startup/logger');

module.exports = permissions => (req, res, next) => {
  if (!permissions) {
    logger.error('missing permission in constants file');
    return res.status(555).json({ message: 'missing permission' });
  }
  console.log(req.user.permissions);
  if (!req.user.permissions) {
    logger.error('missing permission in user token');
    return res.status(555).json({
      message: 'missing permission, try to log out and log in again'
    });
  }
  const { originalUrl } = req;

  if (!permissions.some(perm => req.user.permissions.includes(perm))) {
    logger.error(`access denied! ${originalUrl}`);
    return res
      .status(403)
      .json({ message: 'unAuthorized to access this api ' });
  }

  return next();
};
