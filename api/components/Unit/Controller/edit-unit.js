const { editUnit } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const unitId = req.params.id;
      await editUnit({ userId, unitId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Unit edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
