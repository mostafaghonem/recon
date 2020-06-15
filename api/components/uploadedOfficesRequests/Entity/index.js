const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const makeUploadedOfficesRequestsEntity = require('./uploadedOfficesRequestsEntity');

const Entity = makeUploadedOfficesRequestsEntity({
  ObjectId
});

module.exports.UploadedOfficesRequestsEntity = Entity;
