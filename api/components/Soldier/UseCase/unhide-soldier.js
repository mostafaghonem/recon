/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async id => {
  const filter = { _id: id, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المجند', 403);
  }

  const update = {
    isHidden: true
  };
  await model.updateOneById({ id, update });

  logger.info(`${id} Soldier is hidden now`);
};
