const HostelReservationSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class HostelReservationModel extends GenericModel {
    getReservationForHostelByDate(hostelId, startDatets) {
      return this.getOne({
        query: {
          hostelId,
          from: { $lte: startDatets },
          to: { $gte: startDatets }
        }
      });
    }
  }
  return new HostelReservationModel(HostelReservationSchema);
};
