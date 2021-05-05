const express = require('express');
const {
  addStaffValidation,
  deleteStaffValidation,
  hideStaffValidation,
  unhideStaffValidation,
  editStaffValidation,
  getStaffValidation,
  getStaffsValidation,
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
// @ POST api/staffs/
// Description: Add new staff
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_STAFF_CREATOR]
    })
  ],
  controllers.addStaff
);

// @route
// @ GET api/soldiers/soldier/:id
// Description: Get soldier details for renter
// !access  anonymous
router.get(
  '/data/:id',
  [validateMiddleware(getStaffValidation)],
  controllers.getStaff
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.hideStaff
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.unhideStaff
);

router.post(
  '/delete/:id',
  [
    validateMiddleware(deleteStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_STAFF_EDITOR]
    })
  ],
  controllers.deleteStaff
);

// @route
// @ POST api/staffs/edit/:id
// Description: Edit staff by Admin or House Owner
// !access  anonymous
router.post(
  '/edit/:id',
  [
    validateMiddleware(editStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_STAFF_EDITOR]
    })
  ],
  controllers.editStaff
);

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
// @ GET api/staffs/
// Description: Get Staffs for Renter
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getStaffsValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.getStaffs
);

module.exports = router;
