const express = require('express');
const {
  addConstantValidation,
  deleteConstantValidation,
  hideConstantValidation,
  unhideConstantValidation,
  editConstantValidation,
  getConstantValidation,
  getConstantsValidation
} = require('../Validation');
// const {
//   PaginationValidtion
// } = require('../../../shared/Constants/validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/Constants/
// Description: Add new Constant
// !access  anonymous
router.post(
  '/',
  [validateMiddleware(addConstantValidation), authenticateMiddleware],
  controllers.addConstant
);

router.put(
  '/hide/:id',
  [validateMiddleware(hideConstantValidation), authenticateMiddleware],
  controllers.hideConstant
);

router.put(
  '/unhide/:id',
  [validateMiddleware(unhideConstantValidation), authenticateMiddleware],
  controllers.unhideConstant
);

router.delete(
  '/:id',
  [validateMiddleware(deleteConstantValidation), authenticateMiddleware],
  controllers.deleteConstant
);

// @route
// @ GET api/Constants/
// Description: Get Constants for Renter
// !access  anonymous
router.get(
  '/',
  [validateMiddleware(getConstantsValidation), authenticateMiddleware],
  controllers.getConstants
);

module.exports = router;
