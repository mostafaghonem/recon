const { deleteDivision } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteDivision(req.params.id);

      return res
        .status(200)
        .json({ message: 'Division deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
