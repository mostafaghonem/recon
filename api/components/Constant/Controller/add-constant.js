const { addConstant } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedconstant = await addConstant({ ...req.body, user: req.user });
      return res.status(200).json({
        message: 'تم إضافة المكاتبة بنجاح',
        constantId: addedconstant
      });
    } catch (e) {
      return next(e);
    }
  };
};
