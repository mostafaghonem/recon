/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  staffId,
  militaryId,
  individualId,
  nationalId,
  batchId,
  fullName,
  medicalSituation,
  rank,
  category,
  force,
  army,
  address,
  education,
  joinDate,
  birthDate,
  rankingDate,
  phoneNumber,
  medicalCard,
  religion,
  weight,
  height,
  influences,
  unitId,
  divisionId,
  treatment,
  situation,
  isHidden,
  isArchived
}) => {
  let unit;
  const filter = { _id: staffId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المجند', 403);

  if (unitId) {
    unit = {
      unitId,
      divisionId: divisionId || undefined
    };
  }

  const update = {
    militaryId,
    individualId,
    nationalId,
    batchId,
    fullName,
    medicalSituation,
    rank,
    category,
    force,
    army,
    address,
    education,
    joinDate,
    birthDate,
    rankingDate,
    phoneNumber,
    medicalCard,
    religion,
    weight,
    height,
    influences,
    unitId,
    unit,
    divisionId,
    treatment,
    situation,
    isHidden,
    isArchived
  };
  Object.keys(update).map(key => {
    if (update[key] === null) {
      update[key] = undefined;
    }
  });

  await model.updateOneById({
    id: staffId,
    update
  });

  logger.info(`${staffId} Staff updated Successfully`);
};
