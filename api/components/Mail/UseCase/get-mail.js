/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ moment, ApplicationError }) => async ({
  mailId,
  status,
  isArchived
}) => {
  const query = { _id: mailId };
  if (status) {
    query.status = status;
  }
  if (isArchived) {
    query.isArchived = isArchived;
  }
  const select = '';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على هذه المكاتبة',
      403
    );
  }

  checkExistence.similarMails = [];

  return checkExistence;
};
