const { loginUser } = require('../use-cases');

// @route   POST api/users/login
// @desc    user login

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => {
  return async (req, res, next) => {
    try {
      const agent = req.headers['user-agent'] || req.body.agent;
      const result = await loginUser({ ...req.body, agent });
      return res
        .status(200)
        .json({ message: 'User logged in successfully!', token: result });
    } catch (e) {
      return next(e);
    }
  };
};
