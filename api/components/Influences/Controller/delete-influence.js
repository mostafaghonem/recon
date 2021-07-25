const { deleteInfluence } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteInfluence(req.params.id);

      return res
        .status(200)
        .json({ message: 'Influence deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
