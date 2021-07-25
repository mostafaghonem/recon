/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async id => {
  const query = { _id: id, isArchived: false };
  const select = 'name';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذ الصف', 403);
  else {
    // const update = {
    //   isArchived: true
    // };
    // await model.updateOneById({ id, update });
    await model.deleteOneById({ id });
    logger.info(`${id} Staff just got deleted now`);
  }
};
