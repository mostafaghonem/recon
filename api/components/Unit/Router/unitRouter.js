const express = require('express');
const {
  addUnitValidation,
  deleteUnitValidation,
  getMyUnitsValidation,
  getMyUnitValidation
  // getUnits
  // addUnitValidation,
  // addUnitRoomsValidation,
  // hideUnitValidation,
  // unhideUnitValidation,
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

// router.put(
//     '/hide/:id',
//     [
//         validateMiddleware(hideUnitValidation),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
//     ],
//     controllers.hideUnit
// );

// router.put(
//     '/unhide/:id',
//     [
//         validateMiddleware(unhideUnitValidation),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
//     ],
//     controllers.unhideUnit
// );

router.delete(
  '/:id',
  [
    validateMiddleware(deleteUnitValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.deleteUnit
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
//     '/',
//     [
//         validateMiddleware(editUnit),
//         authenticateMiddleware,
//         authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
//     ],
//     controllers.editUnit
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

module.exports = router;
