const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const makeUploadedHostelsRequestsEntity = require('./uploadedHostelsRequestsEntity');

const Entity = makeUploadedHostelsRequestsEntity({
  ObjectId
});

module.exports.UploadedHostelsRequestsEntity = Entity;
