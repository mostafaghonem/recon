const { getClearance } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const clearanceDetails = await getClearance({
        clearanceId: req.params.id,
        userId: req.user ? req.user.id : undefined
      });

      return res
        .status(200)
        .json({ success: true, clearance: clearanceDetails });
    } catch (e) {
      return next(e);
    }
  };
};
