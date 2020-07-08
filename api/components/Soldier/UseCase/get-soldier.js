/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  getSoldiersFavorability,
  GetSoldiersAvailbility,
  accepted
}) => async ({ soldierId, userId, getSimilar }) => {
  let soldiersFavorability = {};
  let soldiersAvailability = {};
  const availableFrom = moment().toDate();
  const availableTo = moment();
  const query = { _id: soldierId, status: accepted, isArchived: false };
  const select =
    'type description userId image currency rentersType numberOfPeople numberOfRooms hasFurniture availableCountNow pricePerPerson dailyOrMonthly highlight availability available gallery address isEditing isFull isHidden services conditions status rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  }

  checkExistence.similarSoldiers = [];

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
  const soldiers = await model.getMany({
    query: filter,
    select: project,
    sort,
    skip: 0,
    limit: 4
  });
  if (getSimilar) {
    checkExistence.similarSoldiers = soldiers;
  }
  const ids = [
    checkExistence._id,
    ...checkExistence.similarSoldiers.map(o => o._id)
  ];

  soldiersAvailability = await GetSoldiersAvailbility({
    soldiersIds: ids,
    availableFrom,
    availableTo
  });

  if (checkExistence.similarSoldiers && checkExistence.similarSoldiers.length) {
    checkExistence.similarSoldiers = checkExistence.similarSoldiers.map(o => {
      const soldierAvailbility = soldiersAvailability[o._id.toString()];
      const soldier = JSON.parse(JSON.stringify(o));
      soldier.available = soldierAvailbility ? soldierAvailbility.value : true;
      return soldier;
    });
  }
  const avaialableExistance =
    soldiersAvailability[checkExistence._id.toString()];
  checkExistence.available = !!avaialableExistance;
  if (userId) {
    soldiersFavorability = await getSoldiersFavorability({
      userId,
      soldiersIds: ids
    });
    const favoriteExistance =
      soldiersFavorability[checkExistence._id.toString()];
    checkExistence.favorite = !!favoriteExistance;
    checkExistence.displayFavorite = true;
    checkExistence.similarSoldiers = checkExistence.similarSoldiers.map(o => {
      const soldier = JSON.parse(JSON.stringify(o));
      soldier.favorite = !!soldiersFavorability[o._id.toString()];
      soldier.displayFavorite = true;
      return soldier;
    });
  }
  return checkExistence;
};
