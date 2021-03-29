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
  PERMISSIONS_KEYS: PERMISSIONS
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
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.addSoldier
);

// @route
// @ GET api/soldiers/soldier/:id
// Description: Get soldier details for renter
// !access  anonymous
router.get(
  '/soldier/:id',
  [
    validateMiddleware(getSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getSoldier
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.hideSoldier
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.unhideSoldier
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteSoldierValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
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
    authorizeMiddleware({ branches: ['recon_force_people'] })
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
    authorizeMiddleware({ branches: ['recon_force_people'] })
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
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getSoldiers
);

module.exports = router;
