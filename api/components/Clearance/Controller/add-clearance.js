const { addClearance, addBulkClearance } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      let addedClearance = {};
      if (req.body.soldiersIds) {
        addedClearance = await addBulkClearance({
          ...req.body,
          user: req.user
        });
      } else {
        addedClearance = await addClearance({
          ...req.body,
          user: req.user
        });
      }

      return res.status(200).json({
        message: 'Clearance has been added successfully!',
        clearanceId: addedClearance
      });
    } catch (e) {
      return next(e);
    }
  };
};
