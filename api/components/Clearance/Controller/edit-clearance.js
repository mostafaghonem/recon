const { editClearanceRequest } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const clearanceId = req.params.id;
      await editClearanceRequest({ userId, clearanceId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Clearance edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
