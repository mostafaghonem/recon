const express = require('express');
const {
  userRegisterValidation,
  userLoginValidation
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

// !access  anonymous
router.get('/facebook-auth', controllers.facebookAuth);

router.get('/facebook-auth-back', controllers.facebookAuthBack);

router.get('/facebook-user-data/:facebookId', controllers.getFacebookUserData);

module.exports = router;
