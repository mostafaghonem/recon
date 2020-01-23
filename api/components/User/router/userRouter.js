const express = require('express');
const {
  userRegisterValidation,
  userLoginValidation,
  phoneVerificationValidation,
  forgetPasswordValidation,
  confirmForgetPasswordValidation,
  changePasswordValidation
} = require('../validations');

const router = express.Router();

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

router.get('/facebook-user-data', controllers.getFacebookUserData);

module.exports = router;
