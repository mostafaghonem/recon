const { getEditHostelsRequests } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      const editHostelsRequests = await getEditHostelsRequests({
        user: req.user,
        ...req.query,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        requests: editHostelsRequests.requests || [],
        allRequestsCount: editHostelsRequests.allRequestsCount
      });
    } catch (e) {
      return next(e);
    }
  };
};
