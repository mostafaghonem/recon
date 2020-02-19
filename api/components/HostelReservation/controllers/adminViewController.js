const { AdminViewUC } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const { result, hasNext, nextSkip, resultLength } = await AdminViewUC({
        ...req.query
      });

      return res
        .status(200)
        .json({ hasNext, nextSkip, resultLength, body: result });
    } catch (e) {
      return next(e);
    }
  };
};
