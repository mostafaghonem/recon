/* eslint-disable no-param-reassign */
const model = require('../Models');
const { recruitmentAreas } = require('../../../shared/constants/locations');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ GetSortObj }) => async ({
  queryObj = '{}',
  militaryId,
  recordId,
  unitId,
  centre,
  governate,
  village,
  force,
  army,
  educationRank,
  recruitmentArea,
  recruitmentLevel,
  situation,
  treatment,
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
  const query = {
    ...queryObj,
    ...sortObj.query,
    isHidden: false,
    isArchived: false
  };
  if (key && key !== '') {
    query.$or = [
      {
        fullName: { $regex: key, $options: 'i' },
        millitaryId: { $regex: key, $options: 'i' },
        'tripleNumber.value': { $regex: key, $options: 'i' }
      }
    ];
  }
  if (governate) query['address.governate'] = String(governate);
  if (unitId) query['unit.unitId'] = unitId;
  if (centre) query['address.centre'] = { $regex: centre, $options: 'i' };
  if (village) query['address.village'] = { $regex: village, $options: 'i' };
  if (force) query.force = force;
  if (army) query.army = army;
  if (educationRank) query.educationRank = educationRank;
  if (recruitmentArea) query.recruitmentArea = recruitmentArea;
  if (situation) query.situation = situation;
  if (treatment) query.treatment = treatment;
  if (recruitmentLevel) query.recruitmentLevel = recruitmentLevel;
  if (militaryId) query.militaryId = { $regex: militaryId, $options: 'i' };
  if (recordId) query.recordId = { $regex: recordId, $options: 'i' };

  // #! Added for the poc case
  limit = 10000000000;
  const unitMatch = { isHidden: false, isArchived: false };
  const unitSelct = 'name force army type';

  const influenceSelect = '';

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
      path: 'soldierId',
      select: influenceSelect
    }
  ];
  const select = '';
  const sort = sortObj.sort;
  const { clearances, total, hasNext } = await model.getClearances({
    query,
    select,
    sort,
    limit,
    populate
  });
  if (clearances && clearances.length !== 0) {
    return { total, hasNext, clearances };
  }
  return { total: 0, hasNext: false, clearances: [] };
};
