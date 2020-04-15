const { getFavoriteUnits } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = req.query.limit || Number(pagination.LIMIT);

      const result = await getFavoriteUnits({
        limit,
        userId: req.user.id,
        sortIndex: req.query.sortIndex,
        sortValue: req.query.sortValue,
        sortKey: req.query.sortKey,
        key: req.query.key || ''
      });

      return res.status(200).json(result);
    } catch (e) {
      return next(e);
    }
  };
};
