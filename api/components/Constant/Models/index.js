const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeconstantModel = require('./ConstantModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeconstantModel({
  GenericModel,
  ObjectId
});
