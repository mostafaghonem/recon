const { PERMISSIONS, PAGINATION, UnitReservationState } = require('./defaults');
const { GetBaseDomain } = require('./methods');
const defaultConstants = require('./defaults');
const paymentDefaults = require('./payment');

module.exports = {
  PERMISSIONS,
  PAGINATION,
  defaultConstants,
  paymentDefaults,
  UnitReservationState,
  GetBaseDomain
};
