const { isDuplicate } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const response = await isDuplicate({
        key: req.query.key,
        value: req.query.value
      });

      return res.status(200).json({ success: true, isDuplicate: response });
    } catch (e) {
      return next(e);
    }
  };
};
