const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeMailModel = require('./MailModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeMailModel({
  GenericModel,
  ObjectId
});
