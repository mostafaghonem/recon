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
  const userId = user.id;
  const recommendation = {
    userId,
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
    notes
  };
  const params = { militaryId, recordId, tripleNumber };

  if (!recommendation.recruitmentArea) {
    throw new ApplicationError(
      'عذراً ولكن لم نستطع تحديد منطقة تجنيد التوصية الرجاء التأكد من صحة العنوان',
      401
    );
  }

  recommendation.status = 'accepted';

  try {
    const checkObj = {};
    const keys = ['militaryId', 'recordId', 'tripleNumber'];
    keys.map(o => {
      if (typeof params[o] !== 'undefined' && params[o] !== '') {
        checkObj[o] = params[o];
      }
    });

    const isDuplicate = await model.checkExistenceByAnd({ type, ...checkObj });

    if (isDuplicate) throw new ApplicationError('duplicate', 400);

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
      console.log('Duplication Error Message', err.message);
      throw new ApplicationError(
        'عذراً ولكن هذا التوصية مسجلة بالفعل فى قاعدة البيانات',
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
