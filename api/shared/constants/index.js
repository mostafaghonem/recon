const { PERMISSIONS, PAGINATION, UnitReservationState } = require('./defaults');
const { GetBaseDomain } = require('./methods');
const locations = require('./locations');
const defaultConstants = require('./defaults');

module.exports = {
  PERMISSIONS,
  PAGINATION,
  defaultConstants,
  locations,
  UnitReservationState,
  GetBaseDomain
};
