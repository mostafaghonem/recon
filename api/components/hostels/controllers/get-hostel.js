const { getHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const hostelDetails = await getHostel({
        hostelId: req.params.id,
        userId: req.user ? req.user.id : undefined
      });

      return res.status(200).json({ success: true, hostel: hostelDetails });
    } catch (e) {
      return next(e);
    }
  };
};
