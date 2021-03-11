const { editStaffRequest } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const staffId = req.params.id;
      await editStaffRequest({ userId, staffId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Staff edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
