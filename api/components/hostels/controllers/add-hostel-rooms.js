const { addHostelRooms } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await addHostelRooms({ ...req.body });

      return res
        .status(200)
        .json({ message: 'Hostel Rooms added successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
