const { addSoldier } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedSoldier = await addSoldier({ ...req.body, user: req.user });
      return res.status(200).json({
        message: 'Soldier has been added successfully!',
        soldierId: addedSoldier
      });
    } catch (e) {
      return next(e);
    }
  };
};
