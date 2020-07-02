const { getEditOfficesRequests } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      const editOfficesRequests = await getEditOfficesRequests({
        user: req.user,
        ...req.query,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        requests: editOfficesRequests.requests || [],
        allRequestsCount: editOfficesRequests.allRequestsCount
      });
    } catch (e) {
      return next(e);
    }
  };
};
