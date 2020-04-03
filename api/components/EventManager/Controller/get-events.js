const { getEvents } = require('../ExternalUseCases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const lastId = req.query.lastId || pagination.LAST_ID;
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const events = await getEvents({
        ...req.query,
        limit,
        lastId,
        targetId: userId
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
