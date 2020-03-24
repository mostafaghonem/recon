const express = require('express');
const {
  addHostelValidation,
  addHostelRoomsValidation,
  hideHostelValidation,
  unhideHostelValidation,
  getAvailabilityData,
  deleteHostelValidation,
  getHostels,
  getRecommendedHostels,
  getHostel,
  editHostel,
  editHostelRooms,
  editHostelAvailability,
  rateHostel
} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
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
    validateMiddleware(addHostelValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addHostel
);

router.post(
  '/rooms',
  [
    authenticateMiddleware,
    validateMiddleware(addHostelRoomsValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addHostelRooms
);

router.put(
  '/hide/:id',
  [
    authenticateMiddleware,
    validateMiddleware(hideHostelValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.hideHostel
);

router.put(
  '/unhide/:id',
  [
    authenticateMiddleware,
    validateMiddleware(unhideHostelValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.unhideHostel
);

router.delete(
  '/:id',
  [
    authenticateMiddleware,
    validateMiddleware(deleteHostelValidation)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.deleteHostel
);

router.get(
  '/',
  [
    validateMiddleware(getHostels)
    // authenticateMiddleware,
    // authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getHostels
);

router.get(
  '/recommended',
  [
    validateMiddleware(getRecommendedHostels)
    // authenticateMiddleware,
    // authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getRecommendedHostels
);

router.get(
  '/:id',
  [
    validateMiddleware(getHostel)
    // authenticateMiddleware,
    // authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getHostel
);

router.post(
  '/rate',
  [
    authenticateMiddleware,
    validateMiddleware(rateHostel)
    // authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.ratehostel
);

router.put(
  '/',
  [
    authenticateMiddleware,
    validateMiddleware(editHostel)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editHostel
);

router.put(
  '/availability',
  [
    authenticateMiddleware,
    validateMiddleware(editHostelAvailability)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editHostelAvailability
);

router.get(
  '/availability/data',
  [
    authenticateMiddleware,
    validateMiddleware(getAvailabilityData)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.getAvailabilityData
);

router.put(
  '/rooms',
  [
    authenticateMiddleware,
    validateMiddleware(editHostelRooms)
    // authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editHostelRooms
);

module.exports = router;
