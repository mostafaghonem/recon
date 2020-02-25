const express = require('express');

// const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');

const router = express.Router({ mergeParams: true });

// const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controller = require('../Controller');

// @route
// @ POST api/hostel-reservation
// !access  renter
router.post(
  '/get-token-form-payment-operation/:reservationId',
  // [authenticateMiddleware, validateMiddleware(reserveValidations)],
  controller.paymentToken
);

module.exports = router;
