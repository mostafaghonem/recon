/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  targetId,
  events
}) => {
  console.log(targetId, events);
  const filter = {
    _id: {
      $in: events
    },
    [`targets.${targetId}`]: { $exists: true }
  };
  const checkExistence = await model.getMany({ query: filter });
  if (!checkExistence || (checkExistence && !checkExistence.length))
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الأحداث', 403);

  const update = {
    [`targets.${targetId}.seen`]: true
  };

  await model.updateManyByFilter({ filter, update });

  logger.info(`${events} Events updated Successfully`);
};
