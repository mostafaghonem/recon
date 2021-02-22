const { distributeMail } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const distributedMail = await distributeMail({
        ...req.body,
        user: req.user
      });
      return res.status(200).json({
        message: 'تم توزيع المكاتبة بنجاح',
        mailId: distributedMail
      });
    } catch (e) {
      return next(e);
    }
  };
};
