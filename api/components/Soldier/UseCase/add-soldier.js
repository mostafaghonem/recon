/* eslint-disable no-unused-vars */
//! only require Entity/model
const { SoldierEntity } = require('../Entity');
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  createSoldierEvent,
  events
}) => async ({
  user,
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
  birthDate,
  recruitmentLevel,
  educationRank,
  influences,
  unitId,
  divisionId,
  treatment,
  units,
  situation,
  isHidden,
  isArchived
}) => {
  const userId = user.id;
  const releaseDate = CalculateReleaseDate({
    joinDate,
    recruitmentLevel,
    educationRank,
    treatment
  });
  const soldier = {
    userId,
    tripleNumber: {
      year: tripleNumber.substr(0, 4),
      value: tripleNumber
    },
    address,
    militaryId,
    recordId,
    nationalId,
    fullName,
    name,
    force,
    army,
    joinDate,
    birthDate,
    recruitmentLevel,
    educationRank,
    influences,
    unit: {
      unitId,
      divisionId
    },
    units,
    treatment,
    situation,
    releaseDate,
    isHidden,
    isArchived
  };

  if (!recruitmentArea) {
    soldier.recruitmentArea = GetRecruitmentAreaFromAddress({ address });
  } else {
    soldier.recruitmentArea = recruitmentArea;
  }

  if (!soldier.recruitmentArea) {
    throw new ApplicationError(
      'عذراً ولكن لم نستطع تحديد منطقة تجنيد المجند الرجاء التأكد من صحة العنوان',
      401
    );
  }
  if (user && user.permissions && user.permissions.includes('admin')) {
    soldier.status = 'accepted';
  }

  try {
    const newSoldier = await model.createOne({ document: soldier });

    logger.info(
      `new Soldier just been added with data => \n${JSON.stringify(
        newSoldier,
        undefined,
        6
      )}`
    );
    return newSoldier.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً ولكن هذا المجند مسجل بالفعل فى قاعدة البيانات',
        401
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('eror in adding soldier', err.message);
      throw new ApplicationError(
        'حدث خطاً ما اثناء ادخال المجند لقاعدة البيانات الرجاء التواصل مع مسئول النظم',
        401
      );
    }
  }

  // await createSoldierEvent({
  //   userId,
  //   soldierId: newSoldier.id,
  //   soldier: newSoldier.toJson(),
  //   eventType: events.UNITS_REQUEST_ADD_UNIT
  // });
};
