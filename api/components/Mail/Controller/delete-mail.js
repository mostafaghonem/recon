const { deleteMail } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteMail(req.params.id);

      return res.status(200).json({ message: 'Mail deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
