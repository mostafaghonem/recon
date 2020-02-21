const { getuploadedHostelsRequests } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      const uploadedHostelsRequests = await getuploadedHostelsRequests({
        ...req.query,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        requests: uploadedHostelsRequests || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
