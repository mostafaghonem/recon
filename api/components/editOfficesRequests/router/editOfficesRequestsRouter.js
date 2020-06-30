const express = require('express');
const {
  getEditOfficesRequests,
  updateEditOfficeRequest
} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/identityRequests
// !access  anonymous
router.get(
  '/',
  [
    authenticateMiddleware,
    validateMiddleware(getEditOfficesRequests),
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.getEditOfficesRequests
);

// @route
// @ POST api/identityRequests
// !access  anonymous
router.put(
  '/',
  [
    authenticateMiddleware,
    validateMiddleware(updateEditOfficeRequest),
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.updateEditOfficeRequest
);

module.exports = router;
