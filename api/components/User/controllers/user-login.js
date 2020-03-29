const { loginUser } = require('../use-cases');

// @route   POST api/users/login
// @desc    user login

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => {
  return async (req, res, next) => {
    try {
      let BASE_DOMAIN =
        process.env.NODE_ENV === 'local' ? 'localhost' : process.env.BASE_URL;
      BASE_DOMAIN = BASE_DOMAIN || 'localhost';
      const agent = req.headers['user-agent'] || req.body.agent;
      const result = await loginUser({ ...req.body, agent });
      res.cookie('sknToken', result, {
        domain: BASE_DOMAIN,
        maxAge: 365 * 24 * 60 * 60 * 1000,
        httpOnly: true
      });

      return res
        .status(200)
        .json({ message: 'User logged in successfully!', token: result });
    } catch (e) {
      return next(e);
    }
  };
};
