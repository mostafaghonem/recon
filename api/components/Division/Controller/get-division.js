const { getDivision } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const divisionDetails = await getDivision({
        divisionId: req.params.id,
        userId: req.user ? req.user.id : undefined,
        getSimilar: true
      });

      return res.status(200).json({ success: true, division: divisionDetails });
    } catch (e) {
      return next(e);
    }
  };
};
