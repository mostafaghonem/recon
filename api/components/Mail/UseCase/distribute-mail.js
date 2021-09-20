/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  mailId,
  branch,
  branches,
  decision,
  arkanDecision
}) => {
  const filter = { _id: mailId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على هذه المكاتبة',
      403
    );
  // eslint-disable-next-line no-param-reassign
  branches = branches || [];
  const update = {
    branch,
    branches,
    decision,
    arkanDecision,
    status: 'accepted'
  };
  await model.updateOneById({
    id: mailId,
    update
  });

  logger.info(`${mailId} Mail distributed Successfully`);
};
