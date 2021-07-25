const { hideMail } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await hideMail(req.params.id);

      return res.status(200).json({ message: 'تم إخفاء المجند بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
