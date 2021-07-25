const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeRecommendationModel = require('./RecommendationModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeRecommendationModel({
  GenericModel,
  ObjectId
});
