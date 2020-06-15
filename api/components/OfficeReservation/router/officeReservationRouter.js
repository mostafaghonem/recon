const express = require('express');

const {
  officeViewValidation,
  adminViewValidation,
  renterViewValidation,
  reserveValidations
} = require('../validations');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');

const router = express.Router();

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/office-reservation/admin-view
// !access  ADMIN
router.get(
  '/admin-view',
  [authenticateMiddleware, validateMiddleware(adminViewValidation)],
  controllers.adminView
);

// @route
// @ GET api/office-reservation/renter-view
// !access  USER
router.get(
  '/renter-view',
  [authenticateMiddleware, validateMiddleware(renterViewValidation)],
  controllers.renterView
);

// @route
// @ GET api/office-reservation/office-view
// !access  HOUSE_OWNER
router.get(
  '/office-view',
  [authenticateMiddleware, validateMiddleware(officeViewValidation)],
  controllers.officeView
);

// @route
// @ POST api/office-reservation
// !access  renter
router.post(
  '/',
  [authenticateMiddleware, validateMiddleware(reserveValidations)],
  controllers.reserve
);

module.exports = router;
