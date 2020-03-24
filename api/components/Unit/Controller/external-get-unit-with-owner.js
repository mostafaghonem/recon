const { getUnitWithOwner } = require('../UnitExternalUseCases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const unitDetails = await getUnitWithOwner(req.params.id);

      return res.status(200).json({ success: true, unit: unitDetails });
    } catch (e) {
      return next(e);
    }
  };
};
