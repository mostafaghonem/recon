const { unhideStaff } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await unhideStaff(req.params.id);

      return res.status(200).json({ message: 'تم إظهار المجند بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
