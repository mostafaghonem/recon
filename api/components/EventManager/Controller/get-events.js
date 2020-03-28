const { getEvents } = require('../ExternalUseCases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const events = await getEvents({
        ...req.query,
        limit
      });

      return res.status(200).json({
        success: true,
        events: events || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
