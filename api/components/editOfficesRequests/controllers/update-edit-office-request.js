const { updateEditOfficesRequests } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await updateEditOfficesRequests({ ...req.body });

      return res.status(200).json({
        success: true
      });
    } catch (e) {
      return next(e);
    }
  };
};
