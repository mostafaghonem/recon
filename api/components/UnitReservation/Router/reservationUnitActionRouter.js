const express = require('express');
const { requestDetailsController } = require('../Controller');

const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');
const { reservationUnitActionValidation } = require('../Validation');

const { houserOwnerDissection } = reservationUnitActionValidation;
module.exports = ({ validation }) => {
  // before routes /api/unit-reservation/reservation-actions
  const router = express.Router({ mergeParams: true });

  router.post(
    '/house-owner-dissection',
    [
      authenticateMiddleware,
      authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
      validation(houserOwnerDissection, 'body')
    ],
    requestDetailsController.getHouseOwnerRequests
  );

  return router;
};
