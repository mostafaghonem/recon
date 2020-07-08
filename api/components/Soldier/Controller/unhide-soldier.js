const { unhideSoldier } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await unhideSoldier(req.params.id);

      return res.status(200).json({ message: 'تم إظهار الوحدة بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
