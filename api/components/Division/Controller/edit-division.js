const { editDivision } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const divisionId = req.params.id;
      await editDivision({ userId, id: divisionId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Division edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
