/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  clearanceId,
  tripleNumber,
  address,
  militaryId,
  recordId,
  force,
  army,
  joinDate,
  birthDate,
  releaseDate,
  recruitmentLevel,
  educationRank,
  influences,
  unit,
  units,
  situation,
  isHidden,
  isArchived
}) => {
  const filter = { _id: clearanceId, userId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المجند', 403);
  const update = {
    tripleNumber,
    address,
    militaryId,
    recordId,
    force,
    army,
    joinDate,
    birthDate,
    releaseDate,
    recruitmentLevel,
    educationRank,
    influences,
    unit,
    units,
    situation,
    isHidden,
    isArchived
  };
  await model.updateOneById({
    id: clearanceId,
    update
  });

  logger.info(`${clearanceId} Clearance updated Successfully`);
};
