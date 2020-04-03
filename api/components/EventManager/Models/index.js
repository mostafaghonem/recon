const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeEventModel = require('./EventModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeEventModel({
  GenericModel,
  ObjectId
});
