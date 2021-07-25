const { hideRecommendation } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await hideRecommendation(req.params.id);

      return res.status(200).json({ message: 'تم إخفاء التوصية بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
