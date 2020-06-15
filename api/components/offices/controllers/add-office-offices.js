const { addOfficeOffices } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await addOfficeOffices({ ...req.body });

      return res
        .status(200)
        .json({ message: 'Office Offices added successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
