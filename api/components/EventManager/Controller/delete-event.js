const { deleteEvent } = require('../ExternalUseCases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteEvent(req.params.id);

      return res.status(200).json({ message: 'Event deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
