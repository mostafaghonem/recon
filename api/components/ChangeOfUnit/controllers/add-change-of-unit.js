const { addChangeOfUnit } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedChange = await addChangeOfUnit({
        ...req.body,
        user: req.user
      });
      return res.status(200).json({
        message: 'Change of Unit has been added successfully!',
        divisionId: addedChange
      });
    } catch (e) {
      return next(e);
    }
  };
};
