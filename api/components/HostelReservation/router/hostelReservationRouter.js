const express = require('express');

const { Working } = require('../validations');

const router = express.Router();

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/hostel-reservation
// !access  anonymous
router.get('/', [validateMiddleware(Working)], controllers.Working);

module.exports = router;
