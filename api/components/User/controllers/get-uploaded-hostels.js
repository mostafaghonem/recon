const { getUploadedHostels } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      const userId = req.user.id;
      const uploadedHostels = await getUploadedHostels({
        ...req.query,
        userId,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        hostels: uploadedHostels || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
