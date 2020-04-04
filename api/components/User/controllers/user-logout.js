// @route   POST api/users/login
// @desc    user login

// eslint-disable-next-line no-empty-pattern
module.exports = ({ getBaseDomain }) => {
  return async (req, res, next) => {
    try {
      const domain = getBaseDomain();
      await req.logout();
      req.session = null;
      await res.clearCookie('sknToken', { domain });
      return res.redirect('/');
    } catch (e) {
      return next(e);
    }
  };
};
