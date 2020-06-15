/* eslint-disable no-unused-vars */
//! only require Entity/model
// const { OfficeReservationEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({
  logger,
  getOfficesDataFromIds,
  getRenterDataWithIds
}) => async ({ renterId, status, skip, limit }) => {
  let reservationDb;

  // # get the reservations by pagination
  reservationDb = await Models.getReservationsWithStatusForUsers(
    [renterId],
    status,
    skip,
    limit
  );

  // # get the unique officeIds and renterIds from the data returned from db
  const officeIdsSet = new Set();

  reservationDb.forEach(reservation => {
    officeIdsSet.add(reservation.officeId);
  });

  // # get the rest of data from users and office Component
  const [officesDataMap, userDataMap] = await Promise.all([
    getOfficesDataFromIds([...officeIdsSet]),
    getRenterDataWithIds([renterId])
  ]);

  // # add the data to the final result
  reservationDb = reservationDb.map(r => ({
    ...r,
    renter: userDataMap[r.renterId] || {
      msg: 'this user not exists anymore'
    },
    office: officesDataMap[r.officeId] || {
      msg: 'this office not exists anymore'
    }
  }));

  // # Done

  logger.info(`Getting officeReservation report on renterView`);

  return reservationDb;
};
