const { getEvent } = require('../ExternalUseCases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const eventDetails = await getEvent({
        eventId: req.query.eventId || req.params.id,
        timestamp: req.query.timestamp
      });

      return res.status(200).json({ success: true, event: eventDetails });
    } catch (e) {
      return next(e);
    }
  };
};
