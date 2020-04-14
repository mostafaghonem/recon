const express = require('express');
const {
  getEditHostelsRequests,
  updateEditHostelRequest
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
    validateMiddleware(getEditHostelsRequests),
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.getEditHostelsRequests
);

// @route
// @ POST api/identityRequests
// !access  anonymous
router.put(
  '/',
  [
    authenticateMiddleware,
    validateMiddleware(updateEditHostelRequest),
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.updateEditHostelRequest
);

module.exports = router;
