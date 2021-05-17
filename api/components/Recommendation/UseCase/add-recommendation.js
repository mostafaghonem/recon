/* eslint-disable no-unused-vars */
//! only require Entity/model
const { RecommendationEntity } = require('../Entity');
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  createRecommendationEvent,
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
  isHidden,
  isArchived
}) => {
  const userId = user.id;
  // const releaseDate = CalculateReleaseDate({
  //   joinDate,
  //   recruitmentLevel,
  //   educationRank,
  //   treatment
  // });
  const recommendation = {
    userId,
    tripleNumber,
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

  if (unitId) {
    recommendation.unit = {
      unitId,
      divisionId
    };
  }

  if (!recruitmentArea) {
    recommendation.recruitmentArea = GetRecruitmentAreaFromAddress({ address });
  } else {
    recommendation.recruitmentArea = recruitmentArea;
  }

  if (!recommendation.recruitmentArea) {
    throw new ApplicationError(
      'عذراً ولكن لم نستطع تحديد منطقة تجنيد التوصية الرجاء التأكد من صحة العنوان',
      401
    );
  }
  if (user && user.permissions && user.permissions.includes('admin')) {
    recommendation.status = 'accepted';
  }

  try {
    const newRecommendation = await model.createOne({
      document: recommendation
    });

    logger.info(
      `new Recommendation just been added with data => \n${JSON.stringify(
        newRecommendation,
        undefined,
        6
      )}`
    );
    return newRecommendation.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً ولكن هذا التوصية مسجل بالفعل فى قاعدة البيانات',
        401
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('eror in adding recommendation', err.message);
      throw new ApplicationError(
        'حدث خطاً ما اثناء ادخال التوصية لقاعدة البيانات الرجاء التواصل مع مسئول النظم',
        401
      );
    }
  }

  // await createRecommendationEvent({
  //   userId,
  //   recommendationId: newRecommendation.id,
  //   recommendation: newRecommendation.toJson(),
  //   eventType: events.UNITS_REQUEST_ADD_UNIT
  // });
};
