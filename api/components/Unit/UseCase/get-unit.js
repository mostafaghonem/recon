/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, accepted }) => async (
  id,
  getSimilar = false
) => {
  const query = { _id: id, status: accepted, isArchived: false };
  const select =
    'type description userId image currency rentersType numberOfPeople numberOfRooms hasFurniture availableCountNow pricePerPerson dailyOrMonthly highlight availability available gallery address isFull isHidden services conditions status rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  }

  checkExistence.similarUnits = [];

  const filter = {
    _id: { $ne: checkExistence._id },
    status: accepted,
    $or: [
      {
        type: checkExistence.type
      },
      {
        'address.government': String(
          checkExistence.address.government
        ).toLowerCase()
      },
      {
        'address.street': {
          $regex: new RegExp(checkExistence.address.street),
          $options: 'i'
        }
      },
      {
        numberOfPeople: checkExistence.numberOfPeople
      },
      {
        numberOfRooms: checkExistence.numberOfRooms
      }
    ],
    isFull: {
      $nin: [true]
    },
    isHidden: false,
    isArchived: false
  };
  const project = select;
  const sort = { createdAt: 1 };
  const units = await model.getMany({
    query: filter,
    select: project,
    sort,
    skip: 0,
    limit: 4
  });
  if (getSimilar) {
    checkExistence.similarUnits = units;
  }

  return checkExistence;
};
