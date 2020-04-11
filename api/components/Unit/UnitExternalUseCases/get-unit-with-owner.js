/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  getUsersByIds,
  accepted
}) => async id => {
  const query = { _id: id, status: accepted, isArchived: false };
  const select =
    'type description userId image currency rentersType numberOfPeople numberOfRooms hasFurniture availableCountNow pricePerPerson dailyOrMonthly highlight availability available gallery address isEditing isFull isHidden services conditions status rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  }

  const owners = await getUsersByIds([checkExistence.userId]);
  if (!owners) {
    throw new ApplicationError('.حدث مشكلة فى محاولة إيجاد ماك الوحدة', 403);
  }

  if (owners && !owners[String(checkExistence.userId)]) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على مالك الوحدة', 403);
  }

  checkExistence.owner = owners[String(checkExistence.userId)];
  return checkExistence;
};
