const { removeHostelFromFavorites } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await removeHostelFromFavorites({
        userId: req.user.id,
        hostelId: req.params.id
      });

      return res
        .status(200)
        .json({ message: 'تم إزالة الفندق من مفضلاتك بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
