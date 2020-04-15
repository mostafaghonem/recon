const { addHostelToFavorites } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await addHostelToFavorites({
        userId: req.user.id,
        hostelId: req.params.id
      });

      return res
        .status(200)
        .json({ message: 'تم إضافة الفندق لمفضلاتك بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
