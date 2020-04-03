const express = require('express');
const reserveUnitRouterMaker = require('./reserveUnitRouter');
const joiMiddleware = require('../../../middlewares/joiMiddleware');

const router = express.Router({ mergeParams: true });

router.use(
  '/reservation',
  reserveUnitRouterMaker({ validation: joiMiddleware })
);

module.exports = router;
