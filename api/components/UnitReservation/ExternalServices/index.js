const { UnitReservationState } = require('../../../shared/constants/defaults');
const UnitReservationEntity = require('../Entity');
const ApplicationError = require('../../../shared/errors/ApplicationError');
const unitReservationCompletePaymentMaker = require('./unitReservationCompletePayment');

const unitReservationCompletePayment = unitReservationCompletePaymentMaker({
  UnitReservationState,
  ApplicationError,
  UnitReservationEntity
});

module.exports = {
  unitCompletePayment: unitReservationCompletePayment
};
