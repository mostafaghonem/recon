const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeDivisionModel = require('./DivisionModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeDivisionModel({
  GenericModel,
  ObjectId
});
