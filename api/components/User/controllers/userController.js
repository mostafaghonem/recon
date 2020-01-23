const {
  googleAuth,
  facebookAuth,
  facebookLoginService,
  googleLoginGetter,
  googleLoginSetter,
  loginService,
  faceBookData
} = require('../use-cases');

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

exports.googleAuthCallback = [
  googleAuth.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    const { id } = req.user;

    let token = await googleLoginSetter(id);
    if (!token) {
      return res.redirect(
        process.env.FRONT_END_URL + `regeistration?googleId=${id}`
      );
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

// Login with gmail section

exports.googleAuthController = googleAuth.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ]
});
