const { getStaff } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const staffDetails = await getStaff({
        staffId: req.params.id,
        userId: req.user ? req.user.id : undefined
      });

      return res.status(200).json(staffDetails);
    } catch (e) {
      return next(e);
    }
  };
};
