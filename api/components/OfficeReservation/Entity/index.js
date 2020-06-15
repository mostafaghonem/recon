const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const buildOfficeReservationEntity = require('./OfficeReservationEntity');

const Entity = buildOfficeReservationEntity({ ObjectId });

module.exports.OfficeReservationEntity = Entity;
