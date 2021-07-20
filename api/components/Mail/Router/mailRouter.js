const express = require('express');
const {
  addMailValidation,
  deleteMailValidation,
  hideMailValidation,
  unhideMailValidation,
  editMailValidation,
  getMailValidation,
  getMailsValidation
} = require('../Validation');
// const {
//   PaginationValidtion
// } = require('../../../shared/constants/validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const mailViewMiddleware = require('../../../middlewares/mailViewMiddleware');
const visaMiddleware = require('../../../middlewares/visaMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/mails/
// Description: Add new mail
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addMailValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['followup'] })
  ],
  controllers.addMail
);

// @route
// @ GET api/mails/mail/:id
// Description: Get mail details for renter
// !access  anonymous
router.get(
  '/mail/:id',
  [
    validateMiddleware(getMailValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['followup'] })
  ],
  controllers.getMail
);

// @route
// @ GET api/mails/mail/:id
// Description: Get mail details for renter
// !access  anonymous
router.get(
  '/data/:id',
  [validateMiddleware(getMailValidation)],
  controllers.getMail
);

// @route
// @ GET api/mails/mail/:id
// Description: Get mail details for renter
// !access  anonymous
router.get('/unanswered', [visaMiddleware], controllers.getUnAnsweredMails);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideMailValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['followup'] })
  ],
  controllers.hideMail
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideMailValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['followup'] })
  ],
  controllers.unhideMail
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteMailValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['followup'] })
  ],
  controllers.deleteMail
);

// @route
// @ PUT api/mails/edit/:id
// Description: Edit mail by Admin or House Owner
// !access  anonymous
router.post(
  '/edit/:id',
  [
    validateMiddleware(editMailValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['followup'] })
  ],
  controllers.editMail
);

// @route
// @ POST api/mails/distribute
// Description: Distribute Mails for Renter
// !access  anonymous
router.post(
  '/distribute',
  [authenticateMiddleware, authorizeMiddleware({ branches: ['followup'] })],
  controllers.distributeMail
);

// @route
// @ GET api/mails/view
// Description: Get Mails for Branch User
// !access  anonymous
router.get(
  '/view',
  [
    validateMiddleware(getMailsValidation),
    authenticateMiddleware,
    mailViewMiddleware()
  ],
  controllers.getMails
);

// @route
// @ GET api/mails/mail/:id
// Description: Get mail details for renter
// !access  anonymous
router.get(
  '/mark-seen/:id',
  [validateMiddleware(getMailValidation), authenticateMiddleware],
  controllers.markSeen
);

// @route
// @ GET api/mails/
// Description: Get Mails for Renter
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getMailsValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['followup', 'presidents'] })
  ],
  controllers.getMails
);

module.exports = router;
