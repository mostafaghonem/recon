/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  soldierId,
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
  const filter = { _id: soldierId, userId, isArchived: false };
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
    tripleNumber: {
      year: tripleNumber.first,
      value: Object.keys(tripleNumber)
        .map(o => tripleNumber[o])
        .join('/')
    },
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
    id: soldierId,
    update
  });

  logger.info(`${soldierId} Soldier updated Successfully`);
};
