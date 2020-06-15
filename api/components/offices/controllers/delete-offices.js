const { deleteOffice } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await deleteOffice(req.params.id);

      return res.status(200).json({ message: 'Office deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
