const express = require('express');
const { reserveUnitController } = require('../Controller');
const reserveUnitValidation = require('../Validation/reserveUnitValidation');

module.exports = ({ validation }) => {
  const router = express.Router({ mergeParams: true });

  router.post(
    '/',
    validation(reserveUnitValidation.bookRequest, 'body'),
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
