const { getUserProfile } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userData = await getUserProfile(req.user.id || i);

      return res.status(200).json({
        success: true,
        profileData: userData
      });
    } catch (e) {
      console.log(e);
      return next(e);
    }
  };
};
