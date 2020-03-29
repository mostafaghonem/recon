const express = require('express');
// const {
//   createEventValidation,
//   deleteEventValidation,
//   updateEventValidation,
//   getEventValidation,
//   getEventsValidation
// } = require('../Validation');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/events/
// Description: Add new event
// !access  user
router.post('/', [authenticateMiddleware], controllers.createEvent);

// @route
// @ GET api/events/event/:id
// Description: Get event details for user
// !access  anonymous
router.get('/event/:id', controllers.getEvent);

router.delete('/:id', [authenticateMiddleware], controllers.deleteEvent);

// @route
// @ PUT api/events/update/:id
// Description: Edit event by Admin or House Owner
// !access  user
router.put('/update/:id', [authenticateMiddleware], controllers.updateEvent);

// @route
// @ GET api/events/
// Description: Get Events for Renter
// !access  user
router.get('/', [authenticateMiddleware], controllers.getEvents);

// @route
// @ GET api/events/unseen
// Description: Get Events for Renter
// !access  user
router.get('/unseen', [authenticateMiddleware], controllers.getUnseen);

// @route
// @ GET api/events/unseen
// Description: Get Events for Renter
// !access  user
router.post('/mark-seen', [authenticateMiddleware], controllers.markSeen);
// @route
// @ GET api/events/unseen
// Description: Get Events for Renter
// !access  user
router.post(
  '/mark-interacted',
  [authenticateMiddleware],
  controllers.markInteracted
);
module.exports = router;
