const { hideHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await hideHostel(req.params.id);

      return res.status(200).json({ message: 'Hostel hidden successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
