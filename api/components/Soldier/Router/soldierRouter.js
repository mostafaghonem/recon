const express = require('express');
const {
  addSoldierValidation,
  deleteSoldierValidation,
  hideSoldierValidation,
  unhideSoldierValidation,
  editSoldierValidation,
  getSoldierValidation,
  getSoldiersValidation
} = require('../Validation');
// const {
//   PaginationValidtion
// } = require('../../../shared/constants/validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const visaMiddleware = require('../../../middlewares/visaMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/soldiers/
// Description: Add new soldier
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.addSoldier
);

// @route
// @ GET api/soldiers/soldier/:id
// Description: Get soldier details for renter
// !access  anonymous
router.get(
  '/soldier/:id',
  [validateMiddleware(getSoldierValidation), visaMiddleware],
  controllers.getSoldier
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.hideSoldier
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.unhideSoldier
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.deleteSoldier
);

// @route
// @ PUT api/soldiers/edit/:id
// Description: Edit soldier by Admin or House Owner
// !access  anonymous
router.put(
  '/edit/:id',
  [
    validateMiddleware(editSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editSoldier
);

// @route
// @ GET api/soldiers/
// Description: Get Soldiers for Renter
// !access  anonymous
router.get(
  '/',
  [validateMiddleware(getSoldiersValidation), visaMiddleware],
  controllers.getSoldiers
);

module.exports = router;
