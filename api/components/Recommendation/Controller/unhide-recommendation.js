const { unhideRecommendation } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await unhideRecommendation(req.params.id);

      return res.status(200).json({ message: 'تم إظهار التوصية بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
