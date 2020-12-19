const { getConstants } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const constantDetails = await getConstants({
        userId: req.user ? req.user.id : undefined
      });

      return res.status(200).json({ success: true, ...constantDetails });
    } catch (e) {
      return next(e);
    }
  };
};
