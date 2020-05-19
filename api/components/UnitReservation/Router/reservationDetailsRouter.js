const express = require('express');
const { requestDetailsController } = require('../Controller');

const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');
const { reservationDetailsValidation } = require('../Validation');

const { houseOwnerPendingRequests } = reservationDetailsValidation;
module.exports = ({ validation }) => {
  // before routes /api/unit-reservation/reservation-details
  const router = express.Router({ mergeParams: true });

  router.get(
    '/house-owner-requests/:unitId',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
      validation(houseOwnerPendingRequests, 'params')
    ],
    requestDetailsController.getHouseOwnerRequests
  );

  router.get(
    '/renter-requests',
    [authenticateMiddleware, authorizeMiddleware([PERMISSIONS.RENTER])],
    requestDetailsController.getRenterRequests
  );

  return router;
};
