const express = require('express');
const reserveUnitRouterMaker = require('./reserveUnitRouter');
const joiMiddleware = require('../../../middlewares/joiMiddleware');
const reservationDetailsRouterMaker = require('./reservationDetailsRouter');

const router = express.Router({ mergeParams: true });

// before routes /api/unit-reservation

router.use(
  '/reservation',
  reserveUnitRouterMaker({ validation: joiMiddleware })
);

router.use(
  '/reservation-details',
  reservationDetailsRouterMaker({ validation: joiMiddleware })
);

module.exports = router;
