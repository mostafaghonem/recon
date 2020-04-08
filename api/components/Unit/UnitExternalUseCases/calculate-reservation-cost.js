/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger, _ }) => async ({
  hostelId,
  fromts,
  tots,
  rooms
}) => {
  try {
    let cost = 0;
    const query = {
      _id: hostelId,
      isArchived: false
    };
    const select = 'rooms';
    const checkExistence = await model.getOne({ query, select });
    return 0;
  } catch (error) {
    return false;
  }
};
