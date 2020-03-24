const { getUnits } = require('../UseCase');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      const units = await getUnits({
        ...req.query,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        units: units || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
