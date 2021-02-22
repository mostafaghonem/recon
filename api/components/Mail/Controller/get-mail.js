const { getMail } = require('../UseCase');

module.exports = ({}) => {
  return async (req, res, next) => {
    try {
      const mailId = req.params.id;
      const result = await getMail({
        mailId
      });

      return res.status(200).json({
        success: true,
        ...result
      });
    } catch (e) {
      return next(e);
    }
  };
};
