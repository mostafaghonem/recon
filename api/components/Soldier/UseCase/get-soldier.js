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
}) => async ({ soldierId, userId }) => {
  const query = { _id: soldierId, status: accepted, isArchived: false };
  const select = '';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المجند', 403);
  }

  checkExistence.similarSoldiers = [];

  return checkExistence;
};
