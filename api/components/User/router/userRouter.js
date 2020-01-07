const express = require('express');
const { userRegisterValidation } = require('../validations');

const router = express.Router();

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/users/register
// !access  anonymous
router.get('/facebook-auth', controllers.facebookAuth);

router.get('/facebook-auth-back', controllers.facebookAuth);

module.exports = router;
