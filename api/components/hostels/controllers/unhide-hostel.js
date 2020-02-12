const { unhideHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await unhideHostel(req.params.id);

      return res.status(200).json({ message: 'Hostel unhidden successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
