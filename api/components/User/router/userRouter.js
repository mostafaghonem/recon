const express = require('express');
const {
  userRegisterValidation,
  userLoginValidation,
  phoneVerificationValidation,
  forgetPasswordValidation,
  confirmForgetPasswordValidation,
  changePasswordValidation,
  updateProfile,
  updatePhone
} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/users/register
// !access  anonymous
router.post(
  '/register',
  [validateMiddleware(userRegisterValidation)],
  controllers.registerUser
);

// @route
// @ POST api/users/login
// !access  anonymous
router.post(
  '/login',
  [validateMiddleware(userLoginValidation)],
  controllers.loginUser
);

// @route
// @ POST api/users/phone/verify
// !access  anonymous
router.post(
  '/phone/verify',
  [validateMiddleware(phoneVerificationValidation)],
  controllers.verifyPhone
);

// @route
// @ POST api/users/phone/verify
// !access  anonymous
router.post(
  '/phone/edit/verify',
  [
    validateMiddleware(phoneVerificationValidation),
    authenticateMiddleware,
    authorizeMiddleware(PERMISSIONS.USER)
  ],
  controllers.phoneUpdateVerification
);

// @route
// @ POST api/users/phone/edit
// !access  anonymous
router.put(
  '/phone/edit',
  [
    validateMiddleware(updatePhone),
    authenticateMiddleware,
    authorizeMiddleware(PERMISSIONS.USER)
  ],
  controllers.updatePhone
);

router.post(
  '/password/forget',
  [validateMiddleware(forgetPasswordValidation)],
  controllers.forgetPassword
);

router.post(
  '/password/confirmForget',
  [validateMiddleware(confirmForgetPasswordValidation)],
  controllers.confirnForgetPassword
);

router.put(
  '/password/change',
  [validateMiddleware(changePasswordValidation)],
  controllers.changePassword
);

// !access  anonymous
router.get('/facebook-auth', controllers.facebookAuth);

router.get('/facebook-auth-back', controllers.facebookAuthBack);

router.get('/facebook-user-data/:facebookId', controllers.getFacebookUserData);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
router.get('/google', controllers.googleAuthController);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/google/callback', controllers.googleAuthCallback);

router.get('/google-user-data/:googleId', controllers.getGoogleUserData);

// @route
// @ POST api/users/profile/view
// !access  anonymous
router.get(
  '/profile/view',
  [authenticateMiddleware, authorizeMiddleware(PERMISSIONS.USER)],
  controllers.getUserProfile
);

// @route
// @ POST api/users/profile/edit
// !access  anonymous
router.put(
  '/profile/edit',
  [
    validateMiddleware(updateProfile),
    authenticateMiddleware,
    authorizeMiddleware(PERMISSIONS.USER)
  ],
  controllers.updateUserProfile
);

module.exports = router;
