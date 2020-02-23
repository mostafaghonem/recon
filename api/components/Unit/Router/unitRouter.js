const express = require('express');
const {
    addUnitValidation,
    deleteUnitValidation
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
// @ GET api/users/profile/view
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
