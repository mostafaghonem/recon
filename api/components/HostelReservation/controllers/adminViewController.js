const { AdminViewUC } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const result = await AdminViewUC({ ...req.query });

      return res.status(200).json({ body: result });
    } catch (e) {
      return next(e);
    }
  };
};
