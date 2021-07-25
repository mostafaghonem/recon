const { editSoldier } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const soldierId = req.params.id;
      await editSoldier({ userId, soldierId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Soldier edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
