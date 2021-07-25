/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  getClearancesFavorability,
  GetClearancesAvailbility,
  accepted
}) => async ({ clearanceId, userId }) => {
  const query = { _id: clearanceId, status: accepted, isArchived: false };
  const select = '';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المجند', 403);
  }

  checkExistence.similarClearances = [];

  return checkExistence;
};
