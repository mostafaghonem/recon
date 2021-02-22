const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeInfluenceModel = require('./InfluenceModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeInfluenceModel({
  GenericModel,
  ObjectId
});
