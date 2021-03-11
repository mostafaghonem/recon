const { deleteClearance } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteClearance(req.params.id);

      return res
        .status(200)
        .json({ message: 'Clearance deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
