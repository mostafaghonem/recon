const { registerUser } = require('../use-cases');

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => {
  return async (req, res, next) => {
    try {
      await registerUser({ ...req.body });

      return res.status(200).json({ body: 'User created successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
