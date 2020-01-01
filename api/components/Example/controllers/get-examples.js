module.exports = ({ listExamples }) => {
  return async ({ req, res, next }) => {
    try {
      const exampleList = await listExamples({
        skip: req.query.skip,
        limit: req.query.limit
      });

      return res.status(200).json({ body: exampleList });
    } catch (e) {
      return next(e);
    }
  };
};
