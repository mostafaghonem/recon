const { deleteRecommendation } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteRecommendation(req.params.id);

      return res
        .status(200)
        .json({ message: 'Recommendation deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
