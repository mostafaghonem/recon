const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const makeIdentityRequestsEntity = require('./indentityRequestsEntity');

const Entity = makeIdentityRequestsEntity({
  ObjectId
});

module.exports.IdentityRequestsEntity = Entity;
