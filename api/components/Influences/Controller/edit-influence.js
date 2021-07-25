const { editInfluenceRequest } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const influenceId = req.params.id;
      await editInfluenceRequest({ userId, influenceId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Influence edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
