const { phoneUpdateVerification } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await phoneUpdateVerification(req.user.id, req.body.phone);

      return res.status(200).json({
        message: 'Verification Code Sent successfully!'
      });
    } catch (e) {
      return next(e);
    }
  };
};
