module.exports = permissions => (req, res, next) => {
  if (!permissions) {
    // eslint-disable-next-line no-undef
    logger.error('missing permission ya traaab');
    return res.status(555).json({ message: 'missing permission ya traaab' });
  }

  const { originalUrl } = req;

  if (!permissions.some(perm => req.user.permissions.includes(perm))) {
    // eslint-disable-next-line no-undef
    logger.error(`access denied! ${originalUrl}`);
    return res
      .status(403)
      .json({ message: 'unAuthorized to access this api ' });
  }

  return next();
};
