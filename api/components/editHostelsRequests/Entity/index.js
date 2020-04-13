const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const makeEditHostelsRequestsEntity = require('./editHostelsRequestsEntity');

const Entity = makeEditHostelsRequestsEntity({
  ObjectId
});

module.exports.EditHostelsRequestsEntity = Entity;
