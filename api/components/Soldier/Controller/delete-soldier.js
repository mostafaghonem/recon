const { deleteSoldier } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteSoldier(req.params.id);

      return res.status(200).json({ message: 'Soldier deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
