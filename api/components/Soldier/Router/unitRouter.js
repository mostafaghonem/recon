const express = require('express');
const {
  addUnitValidation,
  deleteUnitValidation,
  hideUnitValidation,
  unhideUnitValidation,
  editUnitValidation,
  getUnitValidation,
  getUnitsValidation
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
// @ POST api/units/
// Description: Add new unit
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.addUnit
);

// @route
// @ GET api/units/unit/:id
// Description: Get unit details for renter
// !access  anonymous
router.get(
  '/unit/:id',
  [validateMiddleware(getUnitValidation), visaMiddleware],
  controllers.getUnit
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.hideUnit
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.unhideUnit
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.deleteUnit
);

// @route
// @ PUT api/units/edit/:id
// Description: Edit unit by Admin or House Owner
// !access  anonymous
router.put(
  '/edit/:id',
  [
    validateMiddleware(editUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editUnit
);

// @route
// @ GET api/units/
// Description: Get Units for Renter
// !access  anonymous
router.get(
  '/',
  [validateMiddleware(getUnitsValidation), visaMiddleware],
  controllers.getUnits
);

module.exports = router;
