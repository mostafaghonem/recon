const { getSoldier } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const soldierDetails = await getSoldier({
        soldierId: req.params.id,
        userId: req.user ? req.user.id : undefined
      });

      return res.status(200).json({ success: true, soldier: soldierDetails });
    } catch (e) {
      return next(e);
    }
  };
};
