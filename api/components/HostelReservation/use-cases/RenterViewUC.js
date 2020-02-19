/* eslint-disable no-unused-vars */
//! only require Entity/model
// const { HostelReservationEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({
  logger,
  getHostelsDataFromIds,
  getRenterDataWithPhoneSearch
}) => async ({ renterId, status, skip, limit }) => {
  let reservationDb;

  // # get the reservations by pagination
  reservationDb = await Models.getReservationsWithStatusForUsers(
    [renterId],
    status,
    skip,
    limit
  );

  // # get the unique hostelIds and renterIds from the data returned from db
  const hostelIdsSet = new Set();

  reservationDb.forEach(reservation => {
    hostelIdsSet.add(reservation.hostelId);
  });

  // # get the rest of data from users and hostel Component
  const [hostelsDataMap, userDataMap] = await Promise.all([
    getHostelsDataFromIds([...hostelIdsSet]),
    getRenterDataWithPhoneSearch(null, [renterId])
  ]);

  // # add the data to the final result
  reservationDb = reservationDb.map(r => ({
    ...r,
    renter: userDataMap[r.renterId] || {
      msg: 'this user not exists anymore'
    },
    hostel: hostelsDataMap[r.hostelId] || {
      msg: 'this hostel not exists anymore'
    }
  }));

  // # Done

  logger.info(`Getting hostelReservation report on renterView`);

  return reservationDb;
};
