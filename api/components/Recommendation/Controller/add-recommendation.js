const { addRecommendation } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedRecommendation = await addRecommendation({
        ...req.body,
        user: req.user
      });
      return res.status(200).json({
        message: 'Recommendation has been added successfully!',
        recommendationId: addedRecommendation
      });
    } catch (e) {
      return next(e);
    }
  };
};
