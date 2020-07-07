const { getUnit } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const unitDetails = await getUnit({
        unitId: req.params.id,
        userId: req.user ? req.user.id : undefined,
        getSimilar: true
      });

      return res.status(200).json({ success: true, unit: unitDetails });
    } catch (e) {
      return next(e);
    }
  };
};
