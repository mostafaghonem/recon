const express = require('express');
const { reserveUnitController } = require('../Controller');
const reserveUnitValidation = require('../Validation/reserveUnitValidation');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

module.exports = ({ validation }) => {
  const router = express.Router({ mergeParams: true });

  router.post(
    '/',
    [
      validation(reserveUnitValidation.bookRequest, 'body'),
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.RENTER])
    ],
    reserveUnitController.reserveUnit
  );

  router.get(
    '/un-available-times/:unitId',
    validation(reserveUnitValidation.unAvailableTimes, 'params'),
    reserveUnitController.unAvailableTimes
  );

  router.get(
    '/unit-const',
    validation(reserveUnitValidation.getCost, 'query'),
    reserveUnitController.costOfUnit
  );

  return router;
};
