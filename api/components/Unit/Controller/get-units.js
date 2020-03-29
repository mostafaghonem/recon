const { getUnits } = require('../UseCase');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const lastId = req.query.lastId || String(pagination.LAST_ID);
      const key = req.query.key || '';
      const units = await getUnits({
        ...req.query,
        key,
        limit,
        lastId
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
