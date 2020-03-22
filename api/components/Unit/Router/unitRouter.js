const express = require('express');
const {
  addUnitValidation,
  deleteUnitValidation,
  getMyUnitsValidation,
  getMyUnitValidation,
  hideUnitValidation,
  unhideUnitValidation,
  editUnitValidation,
  getUnitValidation,
  getUnitsValidation
  // getUnits
  // addUnitValidation,
  // addUnitRoomsValidation,
  // deleteUnitValidation,
  // getUnits,
  // getRecommendedUnits,
  // getUnit,
  // editUnit,
  // editUnitRooms,
  // editUnitAvailability,
  // rateUnit
} = require('../Validation');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
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
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addUnit
);

// @route
// @ GET api/units/my-units
// Description: Get my units for house owners
// !access  anonymous
router.get(
  '/my-units',
  [
    validateMiddleware(getMyUnitsValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.getMyUnits
);

// @route
// @ GET api/units/my-unit/:id
// Description: Get my unit of specific unit for house owners
// !access  anonymous
router.get(
  '/my-unit/:id',
  [
    validateMiddleware(getMyUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.getMyUnit
);

// router.get(
//     '/',
//     [
//         validateMiddleware(getUnits),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.RENTER])
//     ],
//     controllers.getUnits
// );

// @route
// @ GET api/units/unit/:id
// Description: Get unit details for renter
// !access  anonymous
router.get(
  '/unit/:id',
  [validateMiddleware(getUnitValidation)],
  controllers.getUnit
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.hideUnit
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.unhideUnit
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
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
  [validateMiddleware(getUnitsValidation), authenticateMiddleware],
  controllers.getUnits
);

// router.get(
//     '/recommended',
//     [
//         validateMiddleware(getRecommendedUnits),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.RENTER])
//     ],
//     controllers.getRecommendedUnits
// );

// router.get(
//     '/:id',
//     [
//         validateMiddleware(getUnit),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.RENTER])
//     ],
//     controllers.getUnit
// );

// router.post(
//     '/rate',
//     [
//         validateMiddleware(rateUnit),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.RENTER])
//     ],
//     controllers.rateunit
// );

// router.put(
//     '/availability',
//     [
//         validateMiddleware(editUnitAvailability),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
//     ],
//     controllers.editUnitAvailability
// );

// External Routes for External Use Cases

// @route
// @ GET api/units/unit/:id
// Description: Get unit details for renter
// !access  anonymous
router.get(
  '/external/unit/:id',
  [validateMiddleware(getUnitValidation)],
  controllers.externalGetUnit
);

// @route
// @ GET api/units/unit/:id
// Description: Get unit details for renter
// !access  anonymous
router.get(
  '/external/unit-with-owner/:id',
  [validateMiddleware(getUnitValidation)],
  controllers.externalGetUnitWithOwner
);
module.exports = router;
