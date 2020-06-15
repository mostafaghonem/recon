const { unhideOffice } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await unhideOffice(req.params.id);

      return res.status(200).json({ message: 'Office unhidden successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
