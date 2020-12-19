/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  getMailsFavorability,
  GetMailsAvailbility,
  accepted
}) => async ({ mailId, userId }) => {
  const query = { _id: mailId, status: accepted, isArchived: false };
  const select = '';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المجند', 403);
  }

  checkExistence.similarMails = [];

  return checkExistence;
};
