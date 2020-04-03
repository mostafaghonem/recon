/* eslint-disable no-unused-vars */
//! only require Entity/model
// const { HostelReservationEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({
  logger,
  getHostelsDataFromIds,
  getRenterDataWithPhoneSearch,
  getRenterDataWithIds
}) => async ({ phone, status, skip, limit }) => {
  let userDataMap;
  let hostelsDataMap;
  let reservationDb;

  // ! phone search approach
  if (phone) {
    // # getting userData by phone number
    userDataMap = await getRenterDataWithPhoneSearch(phone);

    // # get the reservations by pagination
    reservationDb = await Models.getReservationsWithStatusForUsers(
      Object.keys(userDataMap),
      status,
      skip,
      limit
    );

    // # get the unique hostelIds and renterIds from the data returned from db
    const hostelIdsSet = new Set();

    reservationDb.forEach(reservation => {
      hostelIdsSet.add(reservation.hostelId);
    });

    // # get the rest of data from hostel Component
    hostelsDataMap = await getHostelsDataFromIds([...hostelIdsSet]);
  }
  // ! reservation first approach
  else {
    // # get the reservations by pagination
    reservationDb = await Models.getReservationsWithStatus(status, skip, limit);

    // # get the unique hostelIds and renterIds from the data returned from db
    const renterIdsSet = new Set();
    const hostelIdsSet = new Set();

    reservationDb.forEach(reservation => {
      renterIdsSet.add(reservation.renterId);
      hostelIdsSet.add(reservation.hostelId);
    });

    // # get the rest of data from users and hostel Component
    [hostelsDataMap, userDataMap] = await Promise.all([
      getHostelsDataFromIds([...hostelIdsSet]),
      getRenterDataWithIds([...renterIdsSet])
    ]);
  }

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

  logger.info(`Getting hostelReservation report on adminView`);

  return reservationDb;
};
