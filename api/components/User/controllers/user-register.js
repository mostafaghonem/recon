const { registerUser } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await registerUser({ ...req.body });

      return res.status(200).json({ message: 'User created successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
