const { removeUnitFromFavorites } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await removeUnitFromFavorites({
        userId: req.user.id,
        unitId: req.params.id
      });

      return res
        .status(200)
        .json({ message: 'تم إزالة الوحدة من مفضلاتك بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
