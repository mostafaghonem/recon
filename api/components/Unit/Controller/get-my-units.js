const { getMyUnits } = require('../UseCase');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const lastId = req.query.lastId || String(pagination.LAST_ID);
      const units = await getMyUnits({
        userId: req.user.id,
        lastId,
        limit
      });

      return res.status(200).json(units);
    } catch (e) {
      return next(e);
    }
  };
};
