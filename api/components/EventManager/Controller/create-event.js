const { createEvent } = require('../ExternalUseCases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedEvent = await createEvent({
        ...req.body,
        userId: req.user.id
      });

      return res.status(200).json({
        message: 'Event has been added successfully!',
        eventId: addedEvent
      });
    } catch (e) {
      return next(e);
    }
  };
};
