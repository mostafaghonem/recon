const { getUploadedOfficesCount } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const uploadedOfficesData = await getUploadedOfficesCount({
        userId
      });

      return res.status(200).json({
        success: true,
        officesData: uploadedOfficesData
      });
    } catch (e) {
      return next(e);
    }
  };
};
