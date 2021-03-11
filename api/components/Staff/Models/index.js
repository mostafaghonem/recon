const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const makeStaffModel = require('./StaffModel');
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeStaffModel({
  GenericModel,
  ObjectId
});
