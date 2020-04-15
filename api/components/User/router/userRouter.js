const express = require('express');
const {
  ObjectIdValidation,
  PaginationValidtion
} = require('../../../shared/constants/validations');
const {
  userRegisterValidation,
  userLoginValidation,
  phoneVerificationValidation,
  smsVerificationValidation,
  forgetPasswordValidation,
  confirmForgetPasswordValidation,
  confirmUpdatePasswordValidation,
  changePasswordValidation,
  updateUserPasswordValidation,
  updateProfile,
  updatePhone,
  getHouseOwnerInfo,
  getUploadedHostels,
  getUploadedHostelDetails
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
// @ GET api/users/hasAdminAuthority
// !access  ADMIN
router.get(
  '/hasAdminAuthority',
  [authenticateMiddleware, authorizeMiddleware([PERMISSIONS.ADMIN])],
  (req, res) => res.status(200).json({ ok: true })
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
// @ POST api/users/logout
// !access  anonymous
router.get('/logout', [authenticateMiddleware], controllers.logOutUser);

// @route
// @ POST api/users/phone/verify
// !access  anonymous
router.post(
  '/phone/verify',
  [validateMiddleware(smsVerificationValidation)],
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
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.phoneUpdateVerification
);

// @route
// @ PUT api/users/phone/edit
// !access  anonymous
router.put(
  '/phone/edit',
  [
    validateMiddleware(updatePhone),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.updatePhone
);

// reset password
router.post(
  '/password/forget',
  [validateMiddleware(forgetPasswordValidation)],
  controllers.forgetPassword
);
router.post(
  '/password/confirmForget',
  [validateMiddleware(confirmForgetPasswordValidation)],
  controllers.confirmForgetPassword
);
router.put(
  '/password/change',
  [validateMiddleware(changePasswordValidation)],
  controllers.changePassword
);

// change password

router.get(
  '/password/edit/code',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.updatePasswordCode
);
router.post(
  '/password/edit/confirmCode',
  [
    validateMiddleware(confirmUpdatePasswordValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.confirmUpdatePassword
);
router.put(
  '/password',
  [
    validateMiddleware(updateUserPasswordValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.updateUserPassword
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
// @ GET api/users/profile/view
// !access  anonymous
router.get(
  '/profile',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.getUserProfile
);

// @route
// @ PUT api/users/profile/edit
// !access  anonymous
router.put(
  '/profile',
  [
    validateMiddleware(updateProfile),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.updateUserProfile
);

// @route
// @ GET api/users/houseOwner
// !access  anonymous
router.get(
  '/houseOwner/:id',
  [
    validateMiddleware(getHouseOwnerInfo),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.ADMIN])
  ],
  controllers.getHouseOwnerInfo
);

// @route
// @ GET api/users/houseOwner/ci
// !access  anonymous
router.get(
  '/houseOwner/ci/:id',
  [
    validateMiddleware(getHouseOwnerInfo),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.ADMIN])
  ],
  controllers.getHouseOwnerInfoWithCi
);

// @route
// @ GET api/users/uploaded/hostels/count
// !access  anonymous
router.get(
  '/uploaded/hostels/count',
  [
    authenticateMiddleware
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.getUploadedHostelsCount
);

// @route
// @ GET api/users/uploaded/hostels
// !access  anonymous
router.get(
  '/uploaded/hostels',
  [
    validateMiddleware(getUploadedHostels),
    authenticateMiddleware
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.getUploadedHostels
);

// @route
// @ GET api/users/uploaded/hostels
// !access  anonymous
router.get(
  '/uploaded/hostel/:id',
  [
    validateMiddleware(getUploadedHostelDetails),
    authenticateMiddleware
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.getUploadedHostelDetails
);

// @route
// @ POST api/users/favorite/units/:id
// !access  anonymous
router.post(
  '/favorite/units/:id',
  [
    validateMiddleware(ObjectIdValidation),
    authenticateMiddleware
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addUnitToFavorites
);

// @route
// @ DELETE api/users/favorite/units/:id
// !access  anonymous
router.delete(
  '/favorite/units/:id',
  [validateMiddleware(ObjectIdValidation), authenticateMiddleware],
  controllers.removeUnitFromFavorites
);

// @route
// @ GET api/users/favorite/units
// !access  anonymous
router.get(
  '/favorite/units',
  [validateMiddleware(PaginationValidtion), authenticateMiddleware],
  controllers.getFavoriteUnits
);

// @route
// @ POST api/users/favorite/units/:id
// !access  anonymous
router.post(
  '/favorite/hostels/:id',
  [validateMiddleware(ObjectIdValidation), authenticateMiddleware],
  controllers.addUnitToFavorites
);

// @route
// @ DELETE api/users/favorite/units/:id
// !access  anonymous
router.delete(
  '/favorite/hostels/:id',
  [validateMiddleware(ObjectIdValidation), authenticateMiddleware],
  controllers.removeUnitFromFavorites
);

// @route
// @ GET api/users/favorite/units
// !access  anonymous
router.get(
  '/favorite/hostels',
  [validateMiddleware(PaginationValidtion), authenticateMiddleware],
  controllers.getFavoriteUnits
);

module.exports = router;
