const express = require('express');
const {
  createEventValidation,
  deleteEventValidation,
  updateEventValidation,
  getEventValidation,
  getEventsValidation
} = require('../Validation');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/events/
// Description: Add new event
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(createEventValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.createEvent
);

// @route
// @ GET api/events/event/:id
// Description: Get event details for renter
// !access  anonymous
router.get(
  '/event/:id',
  [validateMiddleware(getEventValidation)],
  controllers.getEvent
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteEventValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.deleteEvent
);

// @route
// @ PUT api/events/update/:id
// Description: Edit event by Admin or House Owner
// !access  anonymous
router.put(
  '/update/:id',
  [
    validateMiddleware(updateEventValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.updateEvent
);

// @route
// @ GET api/events/
// Description: Get Events for Renter
// !access  anonymous
router.get(
  '/',
  [validateMiddleware(getEventsValidation)],
  controllers.getEvents
);

module.exports = router;
