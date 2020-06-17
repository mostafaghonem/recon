const { getUploadedOfficeDetails } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id || '';
      const officeDetails = await getUploadedOfficeDetails(
        userId,
        req.params.id
      );

      return res.status(200).json({ success: true, office: officeDetails });
    } catch (e) {
      return next(e);
    }
  };
};
