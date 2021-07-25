const { getClearances } = require('../UseCase');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const lastId = req.query.lastId || String(pagination.LAST_ID);
      const userId = req.user ? req.user.id : undefined;
      const key = req.query.key || '';
      const result = await getClearances({
        ...req.query,
        userId,
        key,
        limit,
        lastId
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
