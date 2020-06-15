const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const makeEditOfficesRequestsEntity = require('./editOfficesRequestsEntity');

const Entity = makeEditOfficesRequestsEntity({
  ObjectId
});

module.exports.EditOfficesRequestsEntity = Entity;
