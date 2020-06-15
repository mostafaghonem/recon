const express = require('express');
const {
  addOfficeValidation,
  addOfficeOfficesValidation,
  hideOfficeValidation,
  unhideOfficeValidation,
  getAvailabilityData,
  deleteOfficeValidation,
  getOffices,
  getRecommendedOffices,
  getOffice,
  editOffice,
  editOfficeOffices,
  editOfficeAvailability,
  rateOffice
} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const visaMiddleware = require('../../../middlewares/visaMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/users/profile/view
// !access  anonymous
router.post(
  '/',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
    validateMiddleware(addOfficeValidation)
  ],
  controllers.addOffice
);

router.post(
  '/offices',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
    validateMiddleware(addOfficeOfficesValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addOfficeOffices
);

router.put(
  '/hide/:id',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
    validateMiddleware(hideOfficeValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.hideOffice
);

router.put(
  '/unhide/:id',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
    validateMiddleware(unhideOfficeValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.unhideOffice
);

router.delete(
  '/:id',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER]),
    validateMiddleware(deleteOfficeValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.deleteOffice
);

router.get(
  '/',
  [validateMiddleware(getOffices), visaMiddleware],
  controllers.getOffices
);

router.get(
  '/recommended',
  [
    validateMiddleware(getRecommendedOffices)
    // authenticateMiddleware,
    // authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getRecommendedOffices
);

router.get(
  '/:id',
  [
    validateMiddleware(getOffice),
    visaMiddleware
    // authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getOffice
);

router.post(
  '/rate',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER]),
    validateMiddleware(rateOffice)
  ],
  controllers.rateoffice
);

router.put(
  '/',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(editOffice)
  ],
  controllers.editOffice
);

router.put(
  '/availability',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(editOfficeAvailability)
  ],
  controllers.editOfficeAvailability
);

router.get(
  '/availability/data',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(getAvailabilityData)
  ],
  controllers.getAvailabilityData
);

router.put(
  '/offices',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(editOfficeOffices)
  ],
  controllers.editOfficeOffices
);

module.exports = router;
