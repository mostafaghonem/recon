/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  mailId,
  mailActions
}) => {
  const filter = { _id: mailId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المجند', 403);
  const update = {
    mailActions,
    status: 'accepted'
  };
  await model.updateOneById({
    id: mailId,
    update
  });

  logger.info(`${mailId} Mail distributed Successfully`);
};
