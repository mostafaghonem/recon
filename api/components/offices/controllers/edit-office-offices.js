const { editOfficeOffices } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      await editOfficeOffices({ userId, ...req.body });

      return res
        .status(200)
        .json({
          success: true,
          message: 'Office Offices edited successfully!'
        });
    } catch (e) {
      return next(e);
    }
  };
};
