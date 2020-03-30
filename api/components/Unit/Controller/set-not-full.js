const { setNotFull } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await setNotFull(req.params.id);

      return res
        .status(200)
        .json({ message: 'تم تغيير حالة الوحدة لغير مكتملة بنجاح' });
    } catch (e) {
      return next(e);
    }
  };
};
