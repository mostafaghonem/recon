const { getUnAnsweredMails } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const mailDetails = await getUnAnsweredMails({
        userId: req.user ? req.user.id : undefined,
        user: req.user,
        ...req.query
      });

      return res.status(200).json({ success: true, ...mailDetails });
    } catch (e) {
      return next(e);
    }
  };
};
