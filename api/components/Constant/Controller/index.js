const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddConstantCtrl = require('./add-constant');
const makeDeleteConstantCtrl = require('./delete-constant');
const makeGetConstsantCtrl = require('./get-constants');
const makeHideConstantCtrl = require('./hide-constant');
const makeUnhideConstantCtrl = require('./unhide-constant');
// ->
const addConstant = makeAddConstantCtrl({});
const deleteConstant = makeDeleteConstantCtrl({});
const getConstants = makeGetConstsantCtrl({ pagination });
const hideConstant = makeHideConstantCtrl({});
const unhideConstant = makeUnhideConstantCtrl({});

const ConstantCtrl = Object.freeze({
  addConstant,
  deleteConstant,
  hideConstant,
  unhideConstant,
  getConstants
});

module.exports = ConstantCtrl;
