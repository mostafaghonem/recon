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
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(addHostelValidation)
  ],
  controllers.addHostel
);

router.post(
  '/rooms',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(addHostelRoomsValidation)
  ],
  controllers.addHostelRooms
);

router.put(
  '/hide/:id',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(hideHostelValidation)
  ],
  controllers.hideHostel
);

router.put(
  '/unhide/:id',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(unhideHostelValidation)
  ],
  controllers.unhideHostel
);

router.delete(
  '/:id',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(deleteHostelValidation)
  ],
  controllers.deleteHostel
);

router.get(
  '/',
  [validateMiddleware(getHostels), visaMiddleware],
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
    validateMiddleware(getHostel),
    visaMiddleware
    // authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getHostel
);

router.post(
  '/rate',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER]),
    validateMiddleware(rateHostel)
  ],
  controllers.ratehostel
);

router.put(
  '/',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(editHostel)
  ],
  controllers.editHostel
);

router.put(
  '/availability',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(editHostelAvailability)
  ],
  controllers.editHostelAvailability
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
  '/rooms',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN]),
    validateMiddleware(editHostelRooms)
  ],
  controllers.editHostelRooms
);

module.exports = router;
