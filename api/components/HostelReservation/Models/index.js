const makeHostelReservationModel = require('./HostelReservationModel').default;
const GenericModel = require('../../shared/models/GenericModel');

module.exports = makeHostelReservationModel({
  GenericModel
});
