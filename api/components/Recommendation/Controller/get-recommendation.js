const { getRecommendation } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const recommendationDetails = await getRecommendation({
        recommendationId: req.params.id,
        userId: req.user ? req.user.id : undefined
      });

      return res.status(200).json(recommendationDetails);
    } catch (e) {
      return next(e);
    }
  };
};
