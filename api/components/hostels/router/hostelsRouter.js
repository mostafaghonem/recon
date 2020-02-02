const express = require('express');
const {} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/users/register
// !access  anonymous
router.post('/register', [validateMiddleware()], controllers.registerUser);

// @route
// @ GET api/users/profile/view
// !access  anonymous
router.get(
  '/profile/view',
  [
    validateMiddleware(),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.registerUser
);

module.exports = router;
