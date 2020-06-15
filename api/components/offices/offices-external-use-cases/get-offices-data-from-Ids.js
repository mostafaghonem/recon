/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  _,
  ObjectId
}) => async officesIds => {
  const offices = {};
  if (officesIds && _.isArray(officesIds) && officesIds.length !== 0) {
    for (let i = 0; i < officesIds.length; i++) {
      const officeId = officesIds[i];
      if (ObjectId.isValid(officeId)) {
        const query = { _id: officeId, isArchived: false };
        const select = 'name image phone address rate totalUsersRated';
        const checkExistence = await model.getOne({ query, select });
        if (!checkExistence) offices[String(officeId)] = null;
        else {
          checkExistence.officeId = officeId;
          checkExistence.rateCount = checkExistence.totalUsersRated;
          offices[String(officeId)] = checkExistence;
        }
      } else offices[String(officeId)] = null;
    }
  }
  return offices;
};
