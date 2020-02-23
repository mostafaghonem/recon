const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const makeUploadedUnitsRequestsEntity = require('./UploadedUnitsRequestsEntity');

const Entity = makeUploadedUnitsRequestsEntity({
  ObjectId
});

module.exports.UploadedUnitsRequestsEntity = Entity;
