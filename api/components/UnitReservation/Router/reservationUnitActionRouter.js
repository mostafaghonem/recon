const express = require('express');
const { reservationUnitActionController } = require('../Controller');

const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');
const { reservationUnitActionValidation } = require('../Validation');

const {
  houserOwnerDissection,
  requestId,
  paymentMethod
} = reservationUnitActionValidation;
module.exports = ({ validation }) => {
  // before routes /api/unit-reservation/reservation-action
  const router = express.Router({ mergeParams: true });

  router.post(
    '/house-owner-decision',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
      validation(houserOwnerDissection, 'body')
    ],
    reservationUnitActionController.houseOwnerDecision
  );

  router.post(
    '/admin-decision',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.ADMIN]),
      validation(houserOwnerDissection, 'body')
    ],
    reservationUnitActionController.adminDecision
  );

  router.post(
    '/admin-pass-request-to-house-owner/:requestId',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.ADMIN]),
      validation(requestId, 'params')
    ],
    reservationUnitActionController.adminAcceptPassRequestToHouseOwner
  );

  router.post(
    '/renter-cancel/:requestId',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.RENTER]),
      validation(requestId, 'params')
    ],
    reservationUnitActionController.renterCancelRequest
  );

  router.get(
    '/pay-for-unit/:requestId',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.RENTER]),
      validation(requestId, 'params'),
      validation(paymentMethod, 'query')
    ],
    reservationUnitActionController.renterPayForUnit
  );

  router.post(
    '/receive-unit/:requestId',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.RENTER]),
      validation(requestId, 'params')
    ],
    reservationUnitActionController.renterReceivedUnit
  );

  return router;
};
