const { deleteStaff } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteStaff(req.params.id);

      return res.status(200).json({ message: 'Staff deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
