const { updateUserPhone } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id || '';
      await updateUserPhone({ userId, ...req.body });

      return res.status(200).json({
        success: true
      });
    } catch (e) {
      return next(e);
    }
  };
};
