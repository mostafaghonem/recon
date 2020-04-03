const { updateEvent } = require('../ExternalUseCases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const eventId = req.params.id || req.body.id || req.query.id;
      await updateEvent({ eventId, update: req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Event updated successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
