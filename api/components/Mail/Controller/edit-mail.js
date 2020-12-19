const { editMailRequest } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const mailId = req.params.id;
      await editMailRequest({ userId, mailId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Mail edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
