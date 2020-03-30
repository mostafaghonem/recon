const { setFull } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await setFull(req.params.id);

      return res
        .status(200)
        .json({ message: 'تم تغيير حالة الوحدة لمكتملة بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
