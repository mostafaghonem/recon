const { getMyUnit } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const unitDetails = await getMyUnit(req.params.id);

      return res.status(200).json({ success: true, data: unitDetails });
    } catch (e) {
      return next(e);
    }
  };
};
