const { getMyUnitsCount } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const result = await getMyUnitsCount({
        userId: req.user.id
      });

      return res.status(200).json(result);
    } catch (e) {
      return next(e);
    }
  };
};
