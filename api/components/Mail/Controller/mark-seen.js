const { markSeen } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await markSeen({ ids: [req.params.id], user: req.user });

      return res
        .status(200)
        .json({ message: 'تم نقل المكاتبة للماكتبات المرئية' });
    } catch (e) {
      return next(e);
    }
  };
};
