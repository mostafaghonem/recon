const express = require('express');

const {
  userRegisterValidation,
  userLoginValidation,
  forgetPasswordValidation,
  confirmForgetPasswordValidation,
  confirmUpdatePasswordValidation,
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

// @route
// @ GET api/users/register
// !access  anonymous
router.post(
  '/register',
  [validateMiddleware(userRegisterValidation)],
  controllers.registerUser
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
// @ POST api/users/login-admin
// !access  anonymous
router.post(
  '/login-admin',
  [validateMiddleware(userLoginValidation)],
  controllers.loginAdmin
);

// @route
// @ POST api/users/logout
// !access  anonymous
router.get('/logout', [authenticateMiddleware], controllers.logOutUser);

// reset password
router.post(
  '/password/forget',
  [validateMiddleware(forgetPasswordValidation)],
  controllers.forgetPassword
);
router.post(
  '/password/confirmForget',
  [validateMiddleware(confirmForgetPasswordValidation)],
  controllers.confirmForgetPassword
);
router.put(
  '/password/change',
  [validateMiddleware(changePasswordValidation)],
  controllers.changePassword
);

// change password

router.get(
  '/password/edit/code',
  [
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.SOLDIER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.updatePasswordCode
);
router.post(
  '/password/edit/confirmCode',
  [
    validateMiddleware(confirmUpdatePasswordValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.SOLDIER, PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.confirmUpdatePassword
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
