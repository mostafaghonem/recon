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
module.exports = ({
  ApplicationError,
  logger,
  moment,
  GetSortObj,
  getSoldiersFavorability,
  GetSoldiersAvailbility,
  accepted
}) => async ({
  userId,
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
  sortValue,
  exportFile
}) => {
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const query = {
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
    }
  ];
  const select = '';
  const sort = sortObj.sort;
  const { soldiers, total, hasNext } = await model.getSoldiers({
    query,
    select,
    sort,
    limit,
    populate
  });
  if (soldiers && soldiers.length !== 0) {
    return { total, hasNext, soldiers };
  }
  return { total: 0, hasNext: false, soldiers: [] };
};
