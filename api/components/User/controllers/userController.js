const { facebookAuth, loginService, faceBookData } = require('../use-cases');

exports.facebookAuthController = facebookAuth.authenticate('facebook');

exports.facebookAuthBackController = [
  facebookAuth.authenticate('facebook', { failureRedirect: '/login' }),
  async (req, res) => {
    const user = req.user;
    const token = await loginService(user);
    if (!token) {
      return res.redirect(`/registration?facebookId=${user.id}`);
    }
    console.log(token);
    // need to set cookie then redirect to home

    return res.status(200).json(token);
  }
];

exports.facebookUserData = async (req, res) => {
  const facebookId = req.params.facebookId;
  const user = await faceBookData(facebookId);
  console.log(user);

  return res.status(200).json(user);
};
