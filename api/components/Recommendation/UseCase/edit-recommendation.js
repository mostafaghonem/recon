/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  recommendationId,
  tripleNumber,
  recruitmentArea,
  address,
  militaryId,
  recordId,
  nationalId,
  unitId,
  divisionId,
  treatment,
  name,
  fullName,
  force,
  army,
  joinDate,
  birthDate,
  releaseDate,
  recruitmentLevel,
  educationRank,
  influences,
  units,
  situation,
  isHidden,
  isArchived
}) => {
  let unit;
  const filter = { _id: recommendationId, userId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا التوصية', 403);
  if (unitId) {
    unit = {
      unitId,
      divisionId: divisionId || undefined
    };
  }
  const update = {
    tripleNumber,
    recruitmentArea,
    address,
    militaryId,
    recordId,
    nationalId,
    name,
    fullName,
    force,
    army,
    joinDate,
    releaseDate,
    birthDate,
    recruitmentLevel,
    educationRank,
    influences,
    unitId,
    divisionId,
    treatment,
    units,
    situation,
    unit,
    isHidden,
    isArchived
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
