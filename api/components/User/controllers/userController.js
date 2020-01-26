const {
  googleAuth,
  facebookAuth,
  googleLoginSetter,
  loginService,
  faceBookData,
  googleLoginGetter
} = require('../use-cases');

exports.facebookAuthController = facebookAuth.authenticate('facebook');

exports.facebookUserData = async (req, res) => {
  const facebookId = req.params.facebookId;
  const user = await faceBookData(facebookId);
  return res.status(200).json(user);
};

exports.googleUserData = async (req, res) => {
  const googleId = req.params.googleId;
  const user = await googleLoginGetter(googleId);
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
    const user = req.user;

    let token = await googleLoginSetter(user);

    console.log('user token afterr logging with google', token);
    if (!token) {
      return res.redirect(`/registration?googleId=${user.id}`);
    }
    // need to set cookie then redirect to home
    return res.redirect(`/registration?token=${token}`);
  }
];

// Login with gmail section

exports.googleAuthController = googleAuth.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ]
});
