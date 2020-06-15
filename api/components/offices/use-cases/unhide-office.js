/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async id => {
  const filter = { _id: id, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);
  const update = {
    isHidden: false
  };
  await model.updateOneById({ id, update });

  logger.info(`${id} Office is unhidden now`);
};
