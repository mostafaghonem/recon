const { getUploadedHostelDetails } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id || '';
      const hostelDetails = await getUploadedHostelDetails(
        userId,
        req.params.id
      );

      return res.status(200).json({ success: true, hostel: hostelDetails });
    } catch (e) {
      return next(e);
    }
  };
};
