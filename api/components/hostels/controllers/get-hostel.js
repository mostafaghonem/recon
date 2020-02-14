const { getHostel } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const hostelDetails = await getHostel(req.params.id);

      return res.status(200).json({ success: true, hostel: hostelDetails });
    } catch (e) {
      return next(e);
    }
  };
};
