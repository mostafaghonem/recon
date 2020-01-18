<<<<<<< HEAD
const {
  googleAuth,
  facebookAuth,
  facebookLoginService,
  googleLoginGetter,
  googleLoginSetter,
  faceBookData
} = require('../use-cases');
=======
const { facebookAuth, loginService, faceBookData } = require('../use-cases');
>>>>>>> b6091cbf802c6988268b46983b0c50470494a639

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
  (req, res) => {
    const { id } = req.user;
    googleLoginSetter(id);
    return res.status(200).json(req.user);
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
