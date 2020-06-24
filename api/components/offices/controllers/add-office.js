const { addOffice } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const addedOffice = await addOffice({ ...req.body, user: req.user });

      return res
        .status(200)
        .json({ message: 'Office added successfully!', officeId: addedOffice });
    } catch (e) {
      return next(e);
    }
  };
};
