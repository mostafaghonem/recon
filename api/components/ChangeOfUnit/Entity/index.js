const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const makeChangeOfUnitEntity = require('./UploadedUnitsChangesEntity');

const Entity = makeChangeOfUnitEntity({
  ObjectId
});

module.exports.ChangeOfUnitEntity = Entity;
