/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, accepted }) => async ({
  staffId,
  userId
}) => {
  const query = { _id: staffId, isArchived: false };
  const select = '';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على هذا الضابط الصف',
      403
    );
  }
  return checkExistence;
};
