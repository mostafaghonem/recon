const { markSeen } = require('../ExternalUseCases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const events = req.body.events;
      const userId = req.user.id;
      await markSeen({ targetId: userId, events });

      return res
        .status(200)
        .json({ success: true, message: 'Event updated successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
