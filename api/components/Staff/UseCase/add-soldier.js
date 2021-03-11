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
  const staff = {
    userId,
    tripleNumber: {
      year: tripleNumber.first,
      value: Object.keys(tripleNumber)
        .map(o => tripleNumber[o])
        .join('/')
    },
    unit: {
      unitId,
      divisionId
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
    units,
    treatment,
    situation,
    releaseDate,
    isHidden,
    isArchived
  };

  if (!recruitmentArea) {
    staff.recruitmentArea = GetRecruitmentAreaFromAddress({ address });
  } else {
    staff.recruitmentArea = recruitmentArea;
  }

  if (!staff.recruitmentArea) {
    throw new ApplicationError(
      'عذراً ولكن لم نستطع تحديد منطقة تجنيد المجند الرجاء التأكد من صحة العنوان',
      401
    );
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
        'عذراً ولكن هذا المجند مسجل بالفعل فى قاعدة البيانات',
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

  // await createStaffEvent({
  //   userId,
  //   staffId: newStaff.id,
  //   staff: newStaff.toJson(),
  //   eventType: events.UNITS_REQUEST_ADD_UNIT
  // });
};
