const { deleteConstant } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteConstant(req.params.id);

      return res
        .status(200)
        .json({ message: 'constant deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
