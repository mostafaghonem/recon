const express = require('express');
const {
  addClearanceValidation,
  deleteClearanceValidation,
  hideClearanceValidation,
  unhideClearanceValidation,
  editClearanceValidation,
  getClearanceValidation,
  getClearancesValidation
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
// @ POST api/clearances/
// Description: Add new clearance
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addClearanceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.addClearance
);

// @route
// @ GET api/clearances/clearance/:id
// Description: Get clearance details for renter
// !access  anonymous
router.get(
  '/clearance/:id',
  [
    validateMiddleware(getClearanceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getClearance
);

// router.put(
//   '/hide/:id',
//   [
//     validateMiddleware(hideClearanceValidation),
//     authenticateMiddleware,
//     authorizeMiddleware({ branches: ['recon_force_people'] })
//   ],
//   controllers.hideClearance
// );

// router.put(
//   '/unhide/:id',
//   [
//     validateMiddleware(unhideClearanceValidation),
//     authenticateMiddleware,
//     authorizeMiddleware({ branches: ['recon_force_people'] })
//   ],
//   controllers.unhideClearance
// );

router.delete(
  '/:id',
  [
    validateMiddleware(deleteClearanceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.deleteClearance
);

// @route
// @ PUT api/clearances/edit/:id
// Description: Edit clearance by Admin or House Owner
// !access  anonymous
router.put(
  '/edit/:id',
  [
    validateMiddleware(editClearanceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.editClearance
);

// @route
// @ GET api/clearances/
// Description: Get Clearances for Renter
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getClearancesValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getClearances
);

module.exports = router;
