const {
  googleAuth,
  facebookAuth,
  facebookLoginService,
  faceBookData
} = require('../use-cases');

exports.facebookAuthController = facebookAuth.authenticate('facebook');

exports.facebookAuthBackController = [
  facebookAuth.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    const facebookId = req.user.facebookId;
    const token = facebookLoginService(facebookId);
    if (!token) {
      // set cookie with facebookId and redirect to register
    } else {
      // set cookie with token and redirect to home
    }
    return res.status(200).json(token);
  }
];

exports.facebookUserData = (req, res) => {
  const facebookId = req.body.facebookId;
  const user = faceBookData(facebookId);

  return res.status(200).json(user);
};

// Login with gmail section

exports.googleAuthController = googleAuth.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ]
});
