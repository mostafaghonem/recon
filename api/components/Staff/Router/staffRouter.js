const express = require('express');
const {
  addStaffValidation,
  deleteStaffValidation,
  hideStaffValidation,
  unhideStaffValidation,
  editStaffValidation,
  getStaffValidation,
  getStaffsValidation
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
// @ POST api/staffs/
// Description: Add new staff
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.addStaff
);

// @route
// @ GET api/staffs/staff/:id
// Description: Get staff details for renter
// !access  anonymous
router.get(
  '/staff/:id',
  [
    validateMiddleware(getStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getStaff
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.hideStaff
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.unhideStaff
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.deleteStaff
);

// @route
// @ PUT api/staffs/edit/:id
// Description: Edit staff by Admin or House Owner
// !access  anonymous
router.put(
  '/edit/:id',
  [
    validateMiddleware(editStaffValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.editStaff
);

// @route
// @ GET api/staffs/
// Description: Get Staffs for Renter
// !access  anonymous
router.get('/constants', authenticateMiddleware, controllers.getConstants);

// @route
// @ GET api/staffs/
// Description: Get Staffs for Renter
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getStaffsValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getStaffs
);

module.exports = router;
