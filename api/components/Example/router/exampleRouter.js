const express = require('express');
const { getExamplesValidation } = require('../validations');

const router = express.Router();

// const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
// const defaults = require('../../../shared/constants/defaults');
const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/analysis/example
// @                 ?skip=1&limit=10
// !access  normal-user
// authorizeMiddleware([defaults.PERMISSIONS.ADMIN]),
router.get(
  '/example',
  [validateMiddleware(getExamplesValidation)],
  controllers.getExampleList
);

module.exports = router;
