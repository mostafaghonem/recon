const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const makeUnitReservationModel = require('./UnitReservationModel');
const GenericModel = require('../../shared/models/GenericModel');
const { defaultConstants } = require('../../../shared/constants');

const unitReservationState = defaultConstants.UnitReservationState;

module.exports = makeUnitReservationModel({
  GenericModel,
  ObjectId,
  unitReservationState
});
