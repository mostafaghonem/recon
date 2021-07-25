/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  recommendationId,
  type,
  tripleNumber,
  recruitmentArea,
  militaryId,
  recordId,
  fullName,
  force,
  recruitmentLevel,
  education,
  recommender,
  unit,
  notes,
  isHidden,
  isArchived
}) => {
  const filter = { _id: recommendationId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه التوصية', 403);

  const update = {
    tripleNumber,
    type,
    recruitmentArea,
    militaryId,
    recordId,
    fullName,
    force,
    recruitmentLevel,
    education,
    recommender,
    unit,
    notes
  };

  Object.keys(update).map(key => {
    if (update[key] === null) {
      update[key] = undefined;
    }
  });
  await model.updateOneById({
    id: recommendationId,
    update
  });

  logger.info(`${recommendationId} Recommendation updated Successfully`);
};
