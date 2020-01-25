const {
  googleAuth,
  facebookAuth,
  googleLoginSetter,
  loginService,
  faceBookData
} = require('../use-cases');

exports.facebookAuthController = facebookAuth.authenticate('facebook');

exports.facebookUserData = async (req, res) => {
  const facebookId = req.params.facebookId;
  const user = await faceBookData(facebookId);
  return res.status(200).json(user);
};

exports.facebookAuthBackController = [
  facebookAuth.authenticate('facebook', {
    failureRedirect: '/login',
    scope: ['email']
  }),
  async (req, res) => {
    const user = req.user;
    const token = await loginService(user);
    if (!token) {
      return res.redirect(`/registration?faceId=${user.id}`);
    }
    // need to set cookie then redirect to home
    return res.redirect(`/registration?token=${token}`);
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

// Login with gmail section

exports.googleAuthController = googleAuth.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ]
});
