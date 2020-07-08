const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeSoldierModel = require('./SoldierModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeSoldierModel({
  GenericModel,
  ObjectId
});
