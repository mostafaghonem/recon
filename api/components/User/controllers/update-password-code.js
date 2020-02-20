const { updatePasswordCode } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      await updatePasswordCode(userId);

      return res.status(200).json({
        success: true
      });
    } catch (e) {
      console.log(e);
      return next(e);
    }
  };
};
