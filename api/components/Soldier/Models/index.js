const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeUnitModel = require('./UnitModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeUnitModel({
  GenericModel,
  ObjectId
});
