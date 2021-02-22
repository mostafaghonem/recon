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
const {
  PERMISSIONS_KEYS: PERMISSIONS
} = require('../../../shared/constants/defaults');

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
    authorizeMiddleware({ permissions: [PERMISSIONS.ADMIN] })
  ],
  controllers.addInfluence
);

// @route
// @ GET api/influences/influence/:id
// Description: Get influence details for renter
// !access  anonymous
router.get(
  '/influence/:id',
  [validateMiddleware(getInfluenceValidation), visaMiddleware],
  controllers.getInfluence
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ permissions: [PERMISSIONS.ADMIN] })
  ],
  controllers.hideInfluence
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ permissions: [PERMISSIONS.ADMIN] })
  ],
  controllers.unhideInfluence
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.ADMIN])
  ],
  controllers.deleteInfluence
);

// @route
// @ PUT api/influences/edit/:id
// Description: Edit influence by Admin or House Owner
// !access  anonymous
router.put(
  '/edit/:id',
  [
    validateMiddleware(editInfluenceValidation),
    authenticateMiddleware,
    authorizeMiddleware({ permissions: [PERMISSIONS.ADMIN] })
  ],
  controllers.editInfluence
);

// @route
// @ GET api/influences/
// Description: Get Influences for Renter
// !access  anonymous
router.get(
  '/',
  [validateMiddleware(getInfluencesValidation), visaMiddleware],
  controllers.getInfluences
);

module.exports = router;
