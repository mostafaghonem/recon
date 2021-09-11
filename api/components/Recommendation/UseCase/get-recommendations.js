const moment = require('moment');
const model = require('../Models');

// setTimeout(() => insert(), 10000);
// async function insert() {
//   const results = require('C://Users/nozom-dev/Downloads/result (1)/result.json');
//   console.log('started migration ===========================>');
//   const users = await model.DbAccess.insertMany(results);
// }

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ GetSortObj, GetDateSplitObj }) => async ({
  queryObj = '{}',
  fullName,
  birthDate,
  joinDate,
  releaseDate,
  militaryId,
  recordId,
  unitId,
  divisionId,
  centre,
  governate,
  village,
  force,
  army,
  education,
  recruitmentArea,
  recruitmentLevel,
  situation,
  treatment,
  noClearance,
  clearance,
  joinMonth,
  joinYear,
  releaseMonth,
  releaseYear,
  type,
  key,
  limit,
  sortIndex,
  sortKey,
  sortValue
}) => {
  queryObj = JSON.parse(queryObj);
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });

  const dateSplitObj = GetDateSplitObj({
    keys: ['createdAt'],
    years: { createdAt: joinYear },
    months: { createdAt: joinMonth }
  });

  const query = {
    ...queryObj,
    ...sortObj.query,
    ...dateSplitObj.query
  };
  if (key && key !== '') {
    query.$and = [
      {
        $or: {
          fullName: { $regex: key, $options: 'i' },
          millitaryId: { $regex: key, $options: 'i' },
          tripleNumber: { $regex: key, $options: 'i' }
        }
      }
    ];
  }
  if (governate) query['address.governate'] = String(governate);
  if (fullName) query.fullName = fullName;
  if (unitId) query['unit.unitId'] = unitId;
  if (divisionId && !unitId) query['unit.divisionId'] = divisionId;
  if (centre) query['address.centre'] = { $regex: centre, $options: 'i' };
  if (village) query['address.village'] = { $regex: village, $options: 'i' };
  if (force) query.force = force;
  if (army) query.army = army;
  if (education) query.education = education;
  if (recruitmentArea) query.recruitmentArea = recruitmentArea;
  if (situation) query.situation = situation;
  if (treatment) query.treatment = treatment;
  if (recruitmentLevel) query.recruitmentLevel = recruitmentLevel;
  if (militaryId) query.militaryId = militaryId;
  if (recordId) query.recordId = recordId;
  if (birthDate) query.birthDate = birthDate;
  if (joinDate) query.joinDate = joinDate;
  if (releaseDate) query.releaseDate = releaseDate;
  if (type) query.type = type;
  if (noClearance) {
    query.clearance = { $exists: false };
  } else if (clearance) {
    query.clearance = { $exists: true };
  }
  // if (militaryId) query.militaryId = { $regex: militaryId, $options: 'i' };
  // if (recordId) query.recordId = { $regex: recordId, $options: 'i' };
  // if (joinYear) {
  //   query.joinDate =
  // }
  // #! Added for the poc case
  limit = 10000000000;
  const unitMatch = { isHidden: false, isArchived: false };
  const unitSelct = 'name force army type';

  const influenceSelect = '';
  const clearanceSelect = '';

  const populate = [
    {
      path: 'unit.unitId',
      match: unitMatch,
      select: unitSelct
    },
    {
      path: 'unit.divisionId',
      match: unitMatch,
      select: unitSelct
    },
    {
      path: 'influences.influenceId',
      select: influenceSelect
    },
    {
      path: 'clearances.clearanceId',
      select: clearanceSelect
    }
  ];
  const select = '';
  const sort = sortObj.sort;
  const { recommendations, total, hasNext } = await model.getRecommendations({
    query,
    select,
    sort,
    limit,
    populate
  });
  if (recommendations && recommendations.length !== 0) {
    return { total, hasNext, recommendations };
  }
  return { total: 0, hasNext: false, recommendations: [] };
};
