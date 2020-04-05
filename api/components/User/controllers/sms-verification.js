const { verifyPhone } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await verifyPhone(req.body.phone, req.body.email);

      return res.status(200).json({
        message: 'Verification Code Sent successfully!'
      });
    } catch (e) {
      return next(e);
    }
  };
};
