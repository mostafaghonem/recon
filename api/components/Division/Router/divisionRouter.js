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
const { PERMISSIONS } = require('../../../shared/constants/defaults');

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
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.addDivision
);

// @route
// @ GET api/divisions/division/:id
// Description: Get division details for renter
// !access  anonymous
router.get(
  '/division/:id',
  [validateMiddleware(getDivisionValidation), visaMiddleware],
  controllers.getDivision
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.hideDivision
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.unhideDivision
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.deleteDivision
);

// @route
// @ PUT api/divisions/edit/:id
// Description: Edit division by Admin or House Owner
// !access  anonymous
router.put(
  '/edit/:id',
  [
    validateMiddleware(editDivisionValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
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
