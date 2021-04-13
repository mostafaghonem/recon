const express = require('express');
const {
  addSoldierValidation,
  deleteSoldierValidation,
  hideSoldierValidation,
  unhideSoldierValidation,
  editSoldierValidation,
  getSoldierValidation,
  getSoldiersValidation,
  isDuplicateValidation
} = require('../Validation');
// const {
//   PaginationValidtion
// } = require('../../../shared/constants/validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const {
  PERMISSIONS_KEYS: PERMISSIONS,
  BRANCHES_KEYS: BRANCHES
} = require('../../../shared/constants/defaults');
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
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_PEOPLE_CREATOR]
    })
  ],
  controllers.addSoldier
);

// @route
// @ GET api/soldiers/soldier/:id
// Description: Get soldier details for renter
// !access  anonymous
router.get(
  '/data/:id',
  [validateMiddleware(getSoldierValidation)],
  controllers.getSoldier
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.hideSoldier
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.unhideSoldier
);

router.post(
  '/delete/:id',
  [
    validateMiddleware(deleteSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_PEOPLE_EDITOR]
    })
  ],
  controllers.deleteSoldier
);

// @route
// @ PUT api/soldiers/edit/:id
// Description: Edit soldier by Admin or House Owner
// !access  anonymous
router.post(
  '/edit/:id',
  [
    validateMiddleware(editSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_PEOPLE_EDITOR]
    })
  ],
  controllers.editSoldier
);

// @route
// @ GET api/soldiers/
// Description: Get Soldiers for Renter
// !access  anonymous
router.get('/constants', authenticateMiddleware, controllers.getConstants);

// @route
// @ GET api/soldiers/is-duplicate
// Description: Gheck if key and value exists
// !access  anonymous
router.get(
  '/is-duplicate',
  [
    validateMiddleware(isDuplicateValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.isDuplicate
);

// @route
// @ GET api/soldiers/
// Description: Get Soldiers for Renter
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getSoldiersValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.getSoldiers
);

module.exports = router;
