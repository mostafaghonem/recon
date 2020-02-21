const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const buildHostelReservationEntity = require('./HostelReservationEntity');

const Entity = buildHostelReservationEntity({ ObjectId });

module.exports.HostelReservationEntity = Entity;
