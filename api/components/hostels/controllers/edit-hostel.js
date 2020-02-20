const { editHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      await editHostel({ userId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Hostel edited successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
