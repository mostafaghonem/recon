const { addDivision } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedDivision = await addDivision({ ...req.body, user: req.user });
      return res.status(200).json({
        message: 'Division has been added successfully!',
        divisionId: addedDivision
      });
    } catch (e) {
      return next(e);
    }
  };
};
