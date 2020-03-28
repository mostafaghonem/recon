/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async id => {
  const query = { _id: id, isArchived: false };
  const select = '';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الحدث', 403);
  else {
    await model.deleteOneById({ id });

    logger.info(`${id} Event just got deleted now`);
  }
};
