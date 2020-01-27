const { forgetPassword } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await forgetPassword({ ...req.body });

      return res.status(200).json({
        message: 'Verification Code Sent successfully!'
      });
    } catch (e) {
      return next(e);
    }
  };
};
