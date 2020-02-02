const makeUserModel = require('./identityRequestsModel');

const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeUserModel(GenericModel);
