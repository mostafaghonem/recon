const express = require('express');
const {
  addDivisionValidation,
  deleteDivisionValidation,
  hideDivisionValidation,
  unhideDivisionValidation,
  editDivisionValidation,
  getDivisionValidation,
  getDivisionsValidation
} = require('../Validation');
// const {
//   PaginationValidtion
// } = require('../../../shared/constants/validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const visaMiddleware = require('../../../middlewares/visaMiddleware');
const {
  PERMISSIONS_KEYS: PERMISSIONS,
  BRANCHES_KEYS: BRANCHES
} = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/divisions/
// Description: Add new division
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      permissions: [PERMISSIONS.ADMIN, PERMISSIONS.RECON_PEOPLE_CREATOR],
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.addDivision
);

// @route
// @ GET api/divisions/division/:id
// Description: Get division details for
// !access  anonymous
router.get(
  '/data/:id',
  [validateMiddleware(getDivisionValidation), visaMiddleware],
  controllers.getDivision
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      permissions: [PERMISSIONS.ADMIN, PERMISSIONS.RECON_PEOPLE_EDITOR],
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.hideDivision
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      permissions: [PERMISSIONS.ADMIN, PERMISSIONS.RECON_PEOPLE_EDITOR],
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.unhideDivision
);

router.post(
  '/delete/:id',
  [
    validateMiddleware(deleteDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      permissions: [
        PERMISSIONS.ADMIN,
        PERMISSIONS.RECON_PEOPLE_CREATOR,
        PERMISSIONS.RECON_PEOPLE_EDITOR
      ],
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.deleteDivision
);

// @route
// @ POST api/divisions/edit/:id
// Description: Edit division by Admin
// !access  anonymous
router.post(
  '/edit/:id',
  [
    validateMiddleware(editDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      permissions: [
        PERMISSIONS.ADMIN,
        PERMISSIONS.RECON_PEOPLE_CREATOR,
        PERMISSIONS.RECON_PEOPLE_EDITOR
      ],
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.editDivision
);

// @route
// @ GET api/divisions/
// Description: Get Divisions for Renter
// !access  anonymous
router.get(
  '/',
  [validateMiddleware(getDivisionsValidation), visaMiddleware],
  controllers.getDivisions
);

module.exports = router;
