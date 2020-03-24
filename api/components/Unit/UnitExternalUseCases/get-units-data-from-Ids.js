/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');
// should have no implementation for any specific orm

const check = async (unitId, { ObjectId }) => {
  if (ObjectId.isValid(unitId)) {
    const query = { _id: unitId, isArchived: false };
    const checkExistence = await model.getOne({ query });
    if (!checkExistence) {
      return null;
    }
    checkExistence.unitId = unitId;
    checkExistence.rateCount = checkExistence.totalUsersRated;
    return checkExistence;
  }
  return null;
};

module.exports = ({
  ApplicationError,
  logger,
  _,
  ObjectId,
  Promise
}) => async unitsIds => {
  const units = {};
  if (unitsIds && _.isArray(unitsIds) && unitsIds.length !== 0) {
    for (let i = 0; i < unitsIds.length; i++) {
      const unitId = unitsIds[i];
      units[String(unitId)] = check(unitId, { ObjectId });
    }
  }
  return Promise.props(units);
};
