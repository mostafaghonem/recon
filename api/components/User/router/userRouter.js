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
// !access  anynomouse
router.post(
  '/register',
  [validateMiddleware(userRegisterValidation)],
  controllers.registerUser
);

// @route
// @ POST api/users/login
// !access  anynomouse
router.post(
  '/login',
  [validateMiddleware(userLoginValidation)],
  controllers.loginUser
);

module.exports = router;
