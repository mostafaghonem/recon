const express = require('express');
const {
  addInfluenceValidation,
  deleteInfluenceValidation,
  hideInfluenceValidation,
  unhideInfluenceValidation,
  editInfluenceValidation,
  getInfluenceValidation,
  getInfluencesValidation
} = require('../Validation');
// const {
//   PaginationValidtion
// } = require('../../../shared/constants/validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const visaMiddleware = require('../../../middlewares/visaMiddleware');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/influences/
// Description: Add new influence
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.addInfluence
);

// @route
// @ GET api/influences/influence/:id
// Description: Get influence details for renter
// !access  anonymous
router.get(
  '/data/:id',
  [
    validateMiddleware(getInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getInfluence
);

router.post(
  '/hide/:id',
  [
    validateMiddleware(hideInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.hideInfluence
);

router.post(
  '/unhide/:id',
  [
    validateMiddleware(unhideInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.unhideInfluence
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.deleteInfluence
);

// @route
// @ PUT api/influences/edit/:id
// Description: Edit influence by Admin or House Owner
// !access  anonymous
router.post(
  '/edit/:id',
  [
    validateMiddleware(editInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.editInfluence
);

// @route
// @ GET api/influences/
// Description: Get Influences for Renter
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getInfluencesValidation),
    authorizeMiddleware({ branches: ['recon_force_people'] })
  ],
  controllers.getInfluences
);

module.exports = router;
