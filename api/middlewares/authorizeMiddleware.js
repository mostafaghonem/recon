const logger = require('../startup/logger');
const { isAuthorized } = require('../shared/constants/methods');

module.exports = ({ permissions, branches }) => (req, res, next) => {
  const { originalUrl, user } = req;
  const auth = isAuthorized({ user, branches, permissions });
  if (auth) {
    return next();
  }

  logger.error(`access denied! ${originalUrl}`);
  return res
    .status(403)
    .json({ message: 'ليس لديك الصلاحيات لعمل هذه العملية' });
};
