const { getEvents } = require('../ExternalUseCases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const lastId = req.query.lastId || pagination.LAST_ID;
      const limit = Number(req.query.limit) || 101;
      const events = await getEvents({
        ...req.query,
        limit,
        lastId,
        targetId: userId,
        seen: false
      });

      return res.status(200).json({
        success: true,
        count: events.length || 0,
        unseen: events || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
