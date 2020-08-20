const express = require('express');
const {
  addChangeOfUnitValidation,
  getChangesOfUnit,
  updateUploadedUnitChange
} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ POST api/divisions/
// Description: Add new division
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addChangeOfUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.addChangeOfUnit
);

// @route
// @ GET api/identityChanges
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getChangesOfUnit),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.getChangesOfUnit
);

// @route
// @ POST api/identityChanges
// !access  anonymous
router.put(
  '/',
  [
    validateMiddleware(updateUploadedUnitChange),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.updateUploadedUnitChange
);

module.exports = router;
