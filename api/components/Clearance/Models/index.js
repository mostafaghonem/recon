const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeClearanceModel = require('./ClearanceModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeClearanceModel({
  GenericModel,
  ObjectId
});
