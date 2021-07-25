const { getInfluences } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const influenceDetails = await getInfluences({
        userId: req.user ? req.user.id : undefined,
        user: req.user,
        ...req.query
      });

      return res.status(200).json({ success: true, ...influenceDetails });
    } catch (e) {
      return next(e);
    }
  };
};
