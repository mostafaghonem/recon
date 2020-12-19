const { hideConstant } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await hideConstant(req.params.id);

      return res.status(200).json({ message: 'تم إخفاء الكود بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
