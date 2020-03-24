const { getUploadedUnitsRequests } = require('../use-cases');

module.exports = ({ pagination, pending }) => {
  return async (req, res, next) => {
    try {
      const status = req.query.status || pending;
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const lastId = req.query.lastId || String(pagination.LAST_ID);
      const key = req.query.key || '';
      const UploadedUnitsRequests = await getUploadedUnitsRequests({
        status,
        key,
        limit,
        lastId
      });

      return res.status(200).json({
        success: true,
        requests: UploadedUnitsRequests || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
