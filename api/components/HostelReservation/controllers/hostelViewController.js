const { HostelViewUC } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const { skip: _skip = 0, limit: _limit = 20, ...query } = req.query;

      const skip = +_skip;
      const limit = +_limit;

      let result = await HostelViewUC({
        ...query,
        skip,
        limit: limit + 1
      });

      let nextSkip = 0;

      const hasNext = result.length === limit + 1;

      if (hasNext) {
        result = result.slice(0, limit);
        nextSkip = skip + limit;
      }

      return res
        .status(200)
        .json({ hasNext, nextSkip, resultLength: result.length, body: result });
    } catch (e) {
      return next(e);
    }
  };
};
