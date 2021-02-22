const { addMail } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedMail = await addMail({ ...req.body, user: req.user });
      return res.status(200).json({
        message: 'تم إضافة المكاتبة بنجاح',
        mailId: addedMail
      });
    } catch (e) {
      return next(e);
    }
  };
};
