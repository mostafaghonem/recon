const { getInfluence } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const influenceDetails = await getInfluence({
        influenceId: req.params.id,
        userId: req.user ? req.user.id : undefined,
        getSimilar: true
      });

      return res
        .status(200)
        .json({ success: true, influence: influenceDetails });
    } catch (e) {
      return next(e);
    }
  };
};
