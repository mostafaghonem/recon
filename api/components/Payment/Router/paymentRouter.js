const express = require('express');

// const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');

const router = express.Router({ mergeParams: true });

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const { hmacValidation } = require('../Validation');
const controller = require('../Controller');

router.post(
  '/transaction',
  validateMiddleware(hmacValidation),
  controller.transactionProcess
);

router.get(
  '/transaction/call-back',
  validateMiddleware(hmacValidation),
  controller.transactionResponse
);

module.exports = router;
