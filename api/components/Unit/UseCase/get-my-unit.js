/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, accepted }) => async id => {
  const query = { _id: id, status: accepted, isArchived: false };
  const checkExistence = await model.getOne({ query });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  checkExistence.available = checkExistence.availableCountNow > 0;

  return checkExistence;
};
