const express = require('express');
const {
  addHostelValidation,
  addHostelRoomsValidation,
  hideHostelValidation,
  unhideHostelValidation,
  deleteHostelValidation
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
    validateMiddleware(addHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addHostel
);

router.post(
  '/rooms',
  [
    validateMiddleware(addHostelRoomsValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addHostelRooms
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.hideHostel
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.unhideHostel
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.deleteHostel
);

module.exports = router;
