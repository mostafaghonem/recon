const { editRecommendation } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const recommendationId = req.params.id;
      await editRecommendation({ userId, recommendationId, ...req.body });

      return res.status(200).json({
        success: true,
        message: 'Recommendation edited successfully!'
      });
    } catch (e) {
      return next(e);
    }
  };
};
