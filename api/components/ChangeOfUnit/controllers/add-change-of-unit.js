const { addChangeOfUnit, addBulkChangeOfUnit } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      let addedChange = {};
      if (req.body.soldiersIds || req.body.staffsIds) {
        addedChange = await addBulkChangeOfUnit({
          ...req.body,
          user: req.user
        });
      } else {
        addedChange = await addChangeOfUnit({
          ...req.body,
          user: req.user
        });
      }

      return res.status(200).json({
        message: 'Change of Unit has been added successfully!',
        divisionId: addedChange
      });
    } catch (e) {
      return next(e);
    }
  };
};
