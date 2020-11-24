const { addInfluence } = require('../UseCase');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedInfluence = await addInfluence({
        ...req.body,
        user: req.user
      });
      return res.status(200).json({
        message: 'Influence has been added successfully!',
        influenceId: addedInfluence
      });
    } catch (e) {
      return next(e);
    }
  };
};
