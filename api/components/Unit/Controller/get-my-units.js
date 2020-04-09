const { getMyUnits } = require('../UseCase');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      let limit = [Number(pagination.LIMIT), Number(pagination.LIMIT)];
      if (req.query.limit) {
        limit = String(req.query.limit)
          .split(',')
          .map(o => parseInt(o, 10));
      }
      const lastId = req.query.lastId || String(pagination.LAST_ID);
      const result = await getMyUnits({
        userId: req.user.id,
        status: req.query.status,
        key: req.query.key,
        sortIndex: req.query.sortIndex,
        sortValue: req.query.sortValue,
        sortKey: req.query.sortKey,
        lastId,
        limit
      });

      return res.status(200).json(result);
    } catch (e) {
      return next(e);
    }
  };
};
