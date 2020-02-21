const { getHouseOwnerInfo } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userData = await getHouseOwnerInfo(req.params.id || '000000000000');

      return res.status(200).json({
        success: true,
        profileData: userData
      });
    } catch (e) {
      return next(e);
    }
  };
};
