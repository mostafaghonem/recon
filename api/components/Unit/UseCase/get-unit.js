/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  getUnitsFavorability,
  GetUnitsAvailbility,
  accepted
}) => async ({ unitId, userId, getSimilar }) => {
  let unitsFavorability = {};
  let unitsAvailability = {};
  const availableFrom = moment().toDate();
  const availableTo = moment();
  const query = { _id: unitId, status: accepted, isArchived: false };
  const select =
    'type description userId image currency rentersType numberOfPeople numberOfRooms hasFurniture availableCountNow pricePerPerson dailyOrMonthly highlight availability available gallery address isEditing isFull isHidden services conditions status rate totalUsersRated';
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
  const ids = [
    checkExistence._id,
    ...checkExistence.similarUnits.map(o => o._id)
  ];

  unitsAvailability = await GetUnitsAvailbility({
    unitsIds: ids,
    availableFrom,
    availableTo
  });

  if (checkExistence.similarUnits && checkExistence.similarUnits.length) {
    checkExistence.similarUnits = checkExistence.similarUnits.map(o => {
      const unitAvailbility = unitsAvailability[o._id.toString()];
      const unit = JSON.parse(JSON.stringify(o));
      unit.available = unitAvailbility ? unitAvailbility.value : true;
      return unit;
    });
  }
  const avaialableExistance = unitsAvailability[checkExistence._id.toString()];
  checkExistence.available = !!avaialableExistance;
  if (userId) {
    unitsFavorability = await getUnitsFavorability({
      userId,
      unitsIds: ids
    });
    const favoriteExistance = unitsFavorability[checkExistence._id.toString()];
    checkExistence.favorite = !!favoriteExistance;
    checkExistence.displayFavorite = true;
    checkExistence.similarUnits = checkExistence.similarUnits.map(o => {
      const unit = JSON.parse(JSON.stringify(o));
      unit.favorite = !!unitsFavorability[o._id.toString()];
      unit.displayFavorite = true;
      return unit;
    });
  }
  return checkExistence;
};
