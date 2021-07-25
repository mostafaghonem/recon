const { addStaff } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedStaff = await addStaff({ ...req.body, user: req.user });
      return res.status(200).json({
        message: 'Staff has been added successfully!',
        staffId: addedStaff
      });
    } catch (e) {
      return next(e);
    }
  };
};
