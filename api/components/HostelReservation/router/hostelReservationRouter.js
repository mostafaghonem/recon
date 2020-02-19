const express = require('express');

const {
  hostelViewValidation,
  adminViewValidation,
  reserveValidations
} = require('../validations');
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
// @ GET api/hostel-reservation
// !access  HOUSE_OWNER
router.get(
  '/hostel-view',
  [authenticateMiddleware, validateMiddleware(hostelViewValidation)],
  controllers.hostelView
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
