const { updateUserProfile } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      if (req.body.phone) delete req.body.phone;
      if (req.body.password) delete req.body.password;
      await updateUserProfile(req.user.id || '', req.body);

      return res.status(200).json({
        success: true
      });
    } catch (e) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      console.log(e);
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      return next(e);
    }
  };
};
