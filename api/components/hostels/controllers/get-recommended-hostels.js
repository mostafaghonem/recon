const { getRecommendedHostels } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || 8;
      const hostels = await getRecommendedHostels({
        limit
      });

      return res.status(200).json({
        success: true,
        hostels: hostels || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
