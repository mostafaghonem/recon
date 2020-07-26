/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  getDivisionsFavorability,
  GetDivisionsAvailbility,
  accepted
}) => async ({ divisionId, userId, getSimilar }) => {
  let divisionsFavorability = {};
  let divisionsAvailability = {};
  const availableFrom = moment().toDate();
  const availableTo = moment();
  const query = { _id: divisionId, status: accepted, isArchived: false };
  const select =
    'type description userId image currency rentersType numberOfPeople numberOfRooms hasFurniture availableCountNow pricePerPerson dailyOrMonthly highlight availability available gallery address isEditing isFull isHidden services conditions status rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  }

  checkExistence.similarDivisions = [];

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
  const divisions = await model.getMany({
    query: filter,
    select: project,
    sort,
    skip: 0,
    limit: 4
  });
  if (getSimilar) {
    checkExistence.similarDivisions = divisions;
  }
  const ids = [
    checkExistence._id,
    ...checkExistence.similarDivisions.map(o => o._id)
  ];

  divisionsAvailability = await GetDivisionsAvailbility({
    divisionsIds: ids,
    availableFrom,
    availableTo
  });

  if (
    checkExistence.similarDivisions &&
    checkExistence.similarDivisions.length
  ) {
    checkExistence.similarDivisions = checkExistence.similarDivisions.map(o => {
      const divisionAvailbility = divisionsAvailability[o._id.toString()];
      const division = JSON.parse(JSON.stringify(o));
      division.available = divisionAvailbility
        ? divisionAvailbility.value
        : true;
      return division;
    });
  }
  const avaialableExistance =
    divisionsAvailability[checkExistence._id.toString()];
  checkExistence.available = !!avaialableExistance;
  if (userId) {
    divisionsFavorability = await getDivisionsFavorability({
      userId,
      divisionsIds: ids
    });
    const favoriteExistance =
      divisionsFavorability[checkExistence._id.toString()];
    checkExistence.favorite = !!favoriteExistance;
    checkExistence.displayFavorite = true;
    checkExistence.similarDivisions = checkExistence.similarDivisions.map(o => {
      const division = JSON.parse(JSON.stringify(o));
      division.favorite = !!divisionsFavorability[o._id.toString()];
      division.displayFavorite = true;
      return division;
    });
  }
  return checkExistence;
};
