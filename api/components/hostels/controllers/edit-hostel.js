const { editHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await editHostel(req.params.id);

      return res.status(200).json({ message: 'Hostel deleted successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
