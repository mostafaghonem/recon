/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  _,
  ObjectId
}) => async hostelsIds => {
  const hostels = {};
  if (hostelsIds && _.isArray(hostelsIds) && hostelsIds.length !== 0) {
    for (let i = 0; i < hostelsIds.length; i++) {
      const hostelId = hostelsIds[i];
      if (ObjectId.isValid(hostelId)) {
        const query = { _id: hostelId, isArchived: false };
        const select = 'name image phone address rate totalUsersRated';
        const checkExistence = await model.getOne({ query, select });
        if (!checkExistence) hostels[String(hostelId)] = null;
        else {
          checkExistence.hostelId = hostelId;
          checkExistence.rateCount = checkExistence.totalUsersRated;
          hostels[String(hostelId)] = checkExistence;
        }
      } else hostels[String(hostelId)] = null;
    }
  }
  return hostels;
};
