const { getuploadedOfficesRequests } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      const uploadedOfficesRequests = await getuploadedOfficesRequests({
        ...req.query,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        requests: uploadedOfficesRequests.requests || [],
        allRequestsCount: uploadedOfficesRequests.allRequestsCount
      });
    } catch (e) {
      return next(e);
    }
  };
};
