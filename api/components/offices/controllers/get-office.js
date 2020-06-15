const { getOffice } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const officeDetails = await getOffice({
        officeId: req.params.id,
        userId: req.user ? req.user.id : undefined
      });

      return res.status(200).json({ success: true, office: officeDetails });
    } catch (e) {
      return next(e);
    }
  };
};
