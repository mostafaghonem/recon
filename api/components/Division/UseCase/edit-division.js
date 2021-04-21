/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  id,
  type,
  name,
  divisionId,
  brigadeId,
  battalionId,
  companyId,
  force,
  army
}) => {
  const filter = { _id: id };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف، لا يمكننا العثور على هذه الوحدة', 403);

  const update = {
    brigadeId,
    battalionId,
    companyId,
    divisionId,
    type,
    name,
    force,
    army
  };
  await model.updateOneById({
    id,
    update
  });

  logger.info(`${divisionId} Division updated Successfully`);
};
