const express = require('express');
const {
  addRecommendationValidation,
  deleteRecommendationValidation,
  hideRecommendationValidation,
  unhideRecommendationValidation,
  editRecommendationValidation,
  getRecommendationValidation,
  getRecommendationsValidation,
  isDuplicateValidation
} = require('../Validation');
// const {
//   PaginationValidtion
// } = require('../../../shared/constants/validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const {
  PERMISSIONS_KEYS: PERMISSIONS,
  BRANCHES_KEYS: BRANCHES
} = require('../../../shared/constants/defaults');
const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../Controller');

// @route
// @ POST api/recommendations/
// Description: Add new recommendation
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addRecommendationValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_PEOPLE_CREATOR]
    })
  ],
  controllers.addRecommendation
);

// @route
// @ GET api/recommendations/recommendation/:id
// Description: Get recommendation details for renter
// !access  anonymous
router.get(
  '/data/:id',
  [validateMiddleware(getRecommendationValidation)],
  controllers.getRecommendation
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideRecommendationValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.hideRecommendation
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideRecommendationValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.unhideRecommendation
);

router.post(
  '/delete/:id',
  [
    validateMiddleware(deleteRecommendationValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_PEOPLE_EDITOR]
    })
  ],
  controllers.deleteRecommendation
);

// @route
// @ PUT api/recommendations/edit/:id
// Description: Edit recommendation by Admin or House Owner
// !access  anonymous
router.post(
  '/edit/:id',
  [
    validateMiddleware(editRecommendationValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE],
      permissions: [PERMISSIONS.RECON_PEOPLE_EDITOR]
    })
  ],
  controllers.editRecommendation
);

// @route
// @ GET api/recommendations/is-duplicate
// Description: Gheck if key and value exists
// !access  anonymous
router.get(
  '/is-duplicate',
  [
    validateMiddleware(isDuplicateValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.isDuplicate
);

// @route
// @ GET api/recommendations/
// Description: Get Recommendations for Renter
// !access  anonymous
router.get(
  '/',
  [
    validateMiddleware(getRecommendationsValidation),
    authenticateMiddleware,
    authorizeMiddleware({
      branches: [BRANCHES.RECON_FORCE_PEOPLE]
    })
  ],
  controllers.getRecommendations
);

module.exports = router;
