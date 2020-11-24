const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddInfluenceCtrl = require('./add-influence');
const makeDeleteInfluenceCtrl = require('./delete-influence');
const makeGetInfluencesCtrl = require('./get-influences');
const makeHideInfluenceCtrl = require('./hide-influence');
const makeUnhideInfluenceCtrl = require('./unhide-influence');
const makeEditInfluenceCtrl = require('./edit-influence');
const makeGetInfluence = require('./get-influence');
// ->
const addInfluence = makeAddInfluenceCtrl({});
const deleteInfluence = makeDeleteInfluenceCtrl({});
const getInfluences = makeGetInfluencesCtrl({ pagination });
const hideInfluence = makeHideInfluenceCtrl({});
const unhideInfluence = makeUnhideInfluenceCtrl({});
const editInfluence = makeEditInfluenceCtrl({});
const getInfluence = makeGetInfluence({});

const influencesCtrl = Object.freeze({
  addInfluence,
  deleteInfluence,
  hideInfluence,
  unhideInfluence,
  editInfluence,
  getInfluence,
  getInfluences
});

module.exports = influencesCtrl;
