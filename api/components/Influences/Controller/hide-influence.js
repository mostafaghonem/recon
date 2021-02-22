const { hideInfluence } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await hideInfluence(req.params.id);

      return res.status(200).json({ message: 'تم إخفاء الوحدة بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
