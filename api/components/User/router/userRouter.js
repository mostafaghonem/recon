const express = require('express');
const { userRegisterValidation } = require('../validations');

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

module.exports = router;
