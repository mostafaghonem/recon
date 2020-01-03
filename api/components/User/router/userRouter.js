const express = require('express');
const { makeUserRegisterValidation } = require('../validations');

const router = express.Router();

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/users/
// @                 ?skip=1&limit=10
// !access  normal-user
router.get(
  '/example',
  [validateMiddleware(makeUserRegisterValidation)],
  controllers.getExampleList
);

module.exports = router;
