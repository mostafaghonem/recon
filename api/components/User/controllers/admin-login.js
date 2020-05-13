const { loginAdmin } = require('../use-cases');

// @route   POST api/users/login
// @desc    user login

// eslint-disable-next-line no-empty-pattern
module.exports = ({ GetBaseDomain }) => {
  return async (req, res, next) => {
    try {
      const agent = req.headers['user-agent'] || req.body.agent;
      const domain = GetBaseDomain();
      const maxAge = 365 * 24 * 60 * 60 * 1000;
      const result = await loginAdmin({ ...req.body, agent });
      res.cookie('sknToken', result, {
        domain,
        maxAge,
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