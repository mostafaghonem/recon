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
}) => async ({ hostelId, phone, status, skip, limit }) => {
  let userDataMap;
  let hostelsDataMap;
  let reservationDb;

  // ! phone search approach
  if (phone) {
    // # getting userData by phone number
    userDataMap = await getRenterDataWithPhoneSearch(phone);

    // # get the reservations by pagination
    [hostelsDataMap, reservationDb] = await Promise.all([
      getHostelsDataFromIds([hostelId]),
      Models.getHostelReservationsWithStatusForUsers(
        hostelId,
        Object.keys(userDataMap),
        status,
        skip,
        limit
      )
    ]);
  }
  // ! reservation first approach
  else {
    // # get the reservations by pagination
    reservationDb = await Models.getHostelReservationsWithStatus(
      hostelId,
      status,
      skip,
      limit
    );

    // # get the unique hostelIds and renterIds from the data returned from db
    const renterIdsSet = new Set();
    reservationDb.forEach(reservation => {
      renterIdsSet.add(reservation.renterId);
    });

    // # get the rest of data from users and hostel Component
    [hostelsDataMap, userDataMap] = await Promise.all([
      getHostelsDataFromIds([hostelId]),
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

  logger.info(`Getting hostelReservation report on hostelView`);

  return reservationDb;
};
