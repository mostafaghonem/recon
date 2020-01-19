const { verifyPhone } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const phoneVerification = await verifyPhone(req.body.phone);

      return res.status(200).json({
        message: 'Verification Code Sent successfully!',
        code: phoneVerification
      });
    } catch (e) {
      return next(e);
    }
  };
};
