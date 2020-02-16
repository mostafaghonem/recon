const express = require('express');

const { Working, reserveValidations } = require('../validations');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');

const router = express.Router();

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/hostel-reservation
// !access  anonymous
router.get(
  '/',
  [authenticateMiddleware, validateMiddleware(Working)],
  controllers.Working
);

// @route
// @ GET api/hostel-reservation
// !access  anonymous
router.post(
  '/',
  [authenticateMiddleware, validateMiddleware(reserveValidations)],
  controllers.reserve
);

module.exports = router;
