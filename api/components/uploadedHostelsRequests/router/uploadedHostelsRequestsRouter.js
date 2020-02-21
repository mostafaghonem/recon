const express = require('express');
const {
  getUploadedHostelsRequests,
  updateUploadedHostelRequest
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
    validateMiddleware(getUploadedHostelsRequests),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.getUploadedHostelsRequests
);

// @route
// @ POST api/identityRequests
// !access  anonymous
router.put(
  '/',
  [
    validateMiddleware(updateUploadedHostelRequest),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.updateUploadedHostelRequest
);

module.exports = router;
