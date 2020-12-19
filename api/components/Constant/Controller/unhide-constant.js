const { unhideConstant } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await unhideConstant(req.params.id);

      return res.status(200).json({ message: 'تم إظهار الكود بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
