const { addUnitToFavorites } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await addUnitToFavorites({ userId: req.user.id, unitId: req.params.id });

      return res
        .status(200)
        .json({ message: 'تم إضافة الوحدة لمفضلاتك بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
