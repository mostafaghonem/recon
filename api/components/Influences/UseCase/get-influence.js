/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  getInfluencesFavorability,
  GetInfluencesAvailbility,
  accepted
}) => async ({ influenceId, userId, getSimilar }) => {
  const availableFrom = moment().toDate();
  const availableTo = moment();
  const query = { _id: influenceId, status: accepted, isArchived: false };
  const select =
    'type description userId image currency rentersType numberOfPeople numberOfRooms hasFurniture availableCountNow pricePerPerson dailyOrMonthly highlight availability available gallery address isEditing isFull isHidden services conditions status rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  }

  checkExistence.similarInfluences = [];

  const filter = {
    _id: { $ne: checkExistence._id },
    status: accepted,
    $or: [
      {
        type: checkExistence.type
      },
      {
        'address.governate': String(
          checkExistence.address.governate
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
  const influences = await model.getMany({
    query: filter,
    select: project,
    sort,
    skip: 0,
    limit: 4
  });
  if (getSimilar) {
    checkExistence.similarInfluences = influences;
  }
  const ids = [
    checkExistence._id,
    ...checkExistence.similarInfluences.map(o => o._id)
  ];

  influencesAvailability = await GetInfluencesAvailbility({
    influencesIds: ids,
    availableFrom,
    availableTo
  });

  if (
    checkExistence.similarInfluences &&
    checkExistence.similarInfluences.length
  ) {
    checkExistence.similarInfluences = checkExistence.similarInfluences.map(
      o => {
        const influenceAvailbility = influencesAvailability[o._id.toString()];
        const influence = JSON.parse(JSON.stringify(o));
        influence.available = influenceAvailbility
          ? influenceAvailbility.value
          : true;
        return influence;
      }
    );
  }
  const avaialableExistance =
    influencesAvailability[checkExistence._id.toString()];
  checkExistence.available = !!avaialableExistance;

  return checkExistence;
};
