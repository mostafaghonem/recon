/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, accepted }) => async id => {
  const query = { _id: id, status: accepted, isArchived: false };
  const select =
    'type description userId image currency rentersType numberOfPeople numberOfRooms hasFurniture availableCountNow pricePerPerson dailyOrMonthly highlight availability available gallery address isHidden services conditions status rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  }

  return checkExistence;
};
