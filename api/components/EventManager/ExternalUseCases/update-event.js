/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  eventId,
  update
}) => {
  const filter = { _id: eventId };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الحدث', 403);

  if (update._id) {
    delete update._id;
  }

  await model.updateOneById({
    id: eventId,
    update
  });

  logger.info(`${eventId} Unit updated Successfully`);
};
