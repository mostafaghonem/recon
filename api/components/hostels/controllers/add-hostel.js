const { addHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedHostel = await addHostel({ ...req.body, user: req.user });

      return res
        .status(200)
        .json({ message: 'Hostel added successfully!', hostelId: addedHostel });
    } catch (e) {
      return next(e);
    }
  };
};
