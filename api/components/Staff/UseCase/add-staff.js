/* eslint-disable no-unused-vars */
//! only require Entity/model
const { StaffEntity } = require('../Entity');
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  createStaffEvent,
  events
}) => async ({
  user,

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
  units,
  situation,
  isHidden,
  isArchived
}) => {
  const userId = user.id;
  const staff = {
    userId,
    address,
    militaryId,
    nationalId,
    individualId,
    batchId,
    fullName,
    force,
    army,
    medicalSituation,
    rank,
    category,
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
    units,
    situation,
    isHidden,
    isArchived
  };

  if (unitId) {
    staff.unit = {
      unitId,
      divisionId
    };
  }

  if (user && user.permissions && user.permissions.includes('admin')) {
    staff.status = 'accepted';
  }

  try {
    const newStaff = await model.createOne({ document: staff });

    logger.info(
      `new Staff just been added with data => \n${JSON.stringify(
        newStaff,
        undefined,
        6
      )}`
    );
    return newStaff.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً ولكن هذا الصف مسجل بالفعل فى قاعدة البيانات',
        401
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('eror in adding staff', err.message);
      throw new ApplicationError(
        'حدث خطاً ما اثناء ادخال المجند لقاعدة البيانات الرجاء التواصل مع مسئول النظم',
        401
      );
    }
  }
};
