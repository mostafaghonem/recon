const { ReserveUC } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await ReserveUC({ ...req.body, renterId: req.user.id });

      return res
        .status(200)
        .json({ body: 'Reservation created successfully!' });
    } catch (e) {
      return next(e);
    }
  };
};
