const { getRecommendedOffices } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || 8;
      const offices = await getRecommendedOffices({
        limit
      });

      return res.status(200).json({
        success: true,
        offices: offices || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
