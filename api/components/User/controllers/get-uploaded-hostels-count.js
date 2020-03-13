const { getUploadedHostelsCount } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const uploadedHostelsData = await getUploadedHostelsCount({
        userId
      });

      return res.status(200).json({
        success: true,
        hostelsData: uploadedHostelsData
      });
    } catch (e) {
      return next(e);
    }
  };
};
