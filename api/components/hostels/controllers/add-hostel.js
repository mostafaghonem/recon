const { addHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await addHostel({ ...req.body, userId: req.user.id });

      return res.status(200).json({ message: 'Hostel added successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
