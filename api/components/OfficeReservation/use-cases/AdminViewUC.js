/* eslint-disable no-unused-vars */
//! only require Entity/model
// const { OfficeReservationEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({
  logger,
  getOfficesDataFromIds,
  getRenterDataWithPhoneSearch,
  getRenterDataWithIds
}) => async ({ phone, status, skip, limit }) => {
  let userDataMap;
  let officesDataMap;
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

    // # get the unique officeIds and renterIds from the data returned from db
    const officeIdsSet = new Set();

    reservationDb.forEach(reservation => {
      officeIdsSet.add(reservation.officeId);
    });

    // # get the rest of data from office Component
    officesDataMap = await getOfficesDataFromIds([...officeIdsSet]);
  }
  // ! reservation first approach
  else {
    // # get the reservations by pagination
    reservationDb = await Models.getReservationsWithStatus(status, skip, limit);

    // # get the unique officeIds and renterIds from the data returned from db
    const renterIdsSet = new Set();
    const officeIdsSet = new Set();

    reservationDb.forEach(reservation => {
      renterIdsSet.add(reservation.renterId);
      officeIdsSet.add(reservation.officeId);
    });

    // # get the rest of data from users and office Component
    [officesDataMap, userDataMap] = await Promise.all([
      getOfficesDataFromIds([...officeIdsSet]),
      getRenterDataWithIds([...renterIdsSet])
    ]);
  }

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

  logger.info(`Getting officeReservation report on adminView`);

  return reservationDb;
};
