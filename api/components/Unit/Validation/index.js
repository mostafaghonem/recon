const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const makeUnitCreate = require('./unit-create-validation');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
module.exports.getIdentityRequests = makeUnitCreate({
    _,
    Builder,
    ValidatorHelper,
    ObjectId,
    requestStatus
});
