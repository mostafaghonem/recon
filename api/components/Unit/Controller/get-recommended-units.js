const { getRecommendedUnits } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || 8;
      const result = await getRecommendedUnits({
        limit,
        userId: req.user ? req.user.id : undefined
      });

      return res.status(200).json({
        success: true,
        ...result
      });
    } catch (e) {
      return next(e);
    }
  };
};
