const { isDuplicate } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const response = await isDuplicate({
        key: req.query.key,
        value: req.query.value,
        keys: req.query.keys,
        values: req.query.values
      });

      return res.status(200).json({ success: true, isDuplicate: response });
    } catch (e) {
      return next(e);
    }
  };
};
