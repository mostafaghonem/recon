const express = require('express');

const { adminViewValidation, reserveValidations } = require('../validations');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');

const router = express.Router();

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/hostel-reservation
// !access  ADMIN
router.get(
  '/admin-view',
  [authenticateMiddleware, validateMiddleware(adminViewValidation)],
  controllers.adminView
);

// @route
// @ POST api/hostel-reservation
// !access  renter
router.post(
  '/',
  [authenticateMiddleware, validateMiddleware(reserveValidations)],
  controllers.reserve
);

module.exports = router;
