const express = require('express');

const {
  userRegisterValidation,
  userLoginValidation,
  changePasswordValidation,
  updateUserPasswordValidation,
  updateProfile
} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');
const userCtrl = require('../controllers');

// @route
// @ GET api/users/register
// !access  anonymous
router.post(
  '/create-user',
  [
    validateMiddleware(userRegisterValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.registerUser
);

// @route
// @ GET api/users/
// !access  ADMIN
router.get(
  '/',
  [authenticateMiddleware, authorizeMiddleware([PERMISSIONS.ADMIN])],
  (req, res) => userCtrl.getUsers)
);

// @route
// @ GET api/users/hasAdminAuthority
// !access  ADMIN
router.get(
  '/hasAdminAuthority',
  [authenticateMiddleware, authorizeMiddleware([PERMISSIONS.ADMIN])],
  (req, res) => res.status(200).json({ ok: true })
);

// @route
// @ POST api/users/login
// !access  anonymous
router.post(
  '/login',
  [validateMiddleware(userLoginValidation)],
  controllers.loginUser
);


// @route
// @ POST api/users/logout
// !access  anonymous
router.get('/logout', [authenticateMiddleware], controllers.logOutUser);

router.put(
  '/password/change',
  [validateMiddleware(changePasswordValidation)],
  controllers.changePassword
);

router.put(
  '/password',
  [
    validateMiddleware(updateUserPasswordValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.SOLDIER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.updateUserPassword
);

// @route
// @ GET api/users/profile/view
// !access  anonymous
router.get(
  '/profile',
  [
    authenticateMiddleware,
    authorizeMiddleware([
      PERMISSIONS.SOLDIER,
      PERMISSIONS.HOUSE_OWNER,
      PERMISSIONS.ADMIN
    ])
  ],
  controllers.getUserProfile
);

// @route
// @ PUT api/users/profile/edit
// !access  anonymous
router.put(
  '/profile',
  [
    validateMiddleware(updateProfile),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.SOLDIER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.updateUserProfile
);

module.exports = router;
