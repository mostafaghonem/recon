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
  getconstantsFavorability,
  GetconstantsAvailbility,
  accepted
}) => async ({
  type,
  seq,
  number,
  date,
  direction,
  key,
  limit,
  sortIndex,
  sortKey,
  sortValue
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
  if (type) query.type = type;
  if (seq) query.seq = { $regex: seq, $options: 'i' };
  if (number) query.number = { $regex: number, $options: 'i' };
  if (date) query.date = date;
  if (direction) query.direction = direction;
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
  const { constants, total, hasNext } = await model.getconstants({
    query,
    select,
    sort,
    limit,
    populate
  });
  if (constants && constants.length !== 0) {
    return { total, hasNext, constants };
  }
  return { total: 0, hasNext: false, constants: [] };
};
