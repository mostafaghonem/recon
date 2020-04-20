const { getHostels } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      if (req.query.available === 'true') req.query.available = true;
      else req.query.available = false;
      const hostels = await getHostels({
        ...req.query,
        userId: req.user ? req.user.id : undefined,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        hostels: hostels || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
