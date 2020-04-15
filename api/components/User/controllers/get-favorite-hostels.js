const { getFavoriteHostels } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = req.query.limit || Number(pagination.LIMIT);

      const result = await getFavoriteHostels({
        limit,
        userId: req.user.id,
        sortIndex: req.query.sortIndex,
        sortValue: req.query.sortValue,
        sortKey: req.query.sortKey
      });

      return res.status(200).json(result);
    } catch (e) {
      return next(e);
    }
  };
};
