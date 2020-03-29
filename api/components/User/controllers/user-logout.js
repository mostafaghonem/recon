const { loginUser } = require('../use-cases');

// @route   POST api/users/login
// @desc    user login

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => {
  return async (req, res, next) => {
    try {
      await req.logout();
      req.session = null;
      await res.clearCookie('sknToken');
      return res.redirect('/');
    } catch (e) {
      return next(e);
    }
  };
};
