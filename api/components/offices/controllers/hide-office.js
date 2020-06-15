const { hideOffice } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await hideOffice(req.params.id);

      return res.status(200).json({ message: 'Office hidden successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
