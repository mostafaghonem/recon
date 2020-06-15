const express = require('express');
const {
  getUploadedOfficesRequests,
  updateUploadedOfficeRequest
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
    validateMiddleware(getUploadedOfficesRequests),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.getUploadedOfficesRequests
);

// @route
// @ POST api/identityRequests
// !access  anonymous
router.put(
  '/',
  [
    validateMiddleware(updateUploadedOfficeRequest),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.updateUploadedOfficeRequest
);

module.exports = router;
