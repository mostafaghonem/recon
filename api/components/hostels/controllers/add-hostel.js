const { addHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedHostel = await addHostel({ ...req.body, userId: req.user.id });

      return res
        .status(200)
        .json({ message: 'Hostel added successfully!', hostelId: addedHostel });
    } catch (e) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      console.log(e);
      console.log('aaaaaaaaaaaaaaaaaaaaaaa');
      return next(e);
    }
  };
};
