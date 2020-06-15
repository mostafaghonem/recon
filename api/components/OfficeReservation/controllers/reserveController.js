const { ReserveUC } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const payload = await ReserveUC({
        ...req.body,
        renterId: req.user.id
      });

      return res.status(200).json({
        body: { msg: 'Reservation created successfully!', payload }
      });
    } catch (e) {
      return next(e);
    }
  };
};
