/* eslint-disable no-param-reassign */
const model = require('../Models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ GetSortObj }) => async ({
  userId,
  divisionId,
  brigadeId,
  battalionId,
  companyId,
  type,
  army,
  force,
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
        name: { $regex: key, $options: 'i' }
      }
    ];
  }
  if (army) query.army = String(army);
  if (force) query.force = String(force);
  if (type) query.type = String(force);
  // if (userId) query.userId = userId;
  if (divisionId) query.divisionId = divisionId;
  if (battalionId) query.battalionId = battalionId;
  if (companyId) query.divisionId = companyId;
  if (brigadeId) query.brigadeId = brigadeId;

  // #! Added for the poc case
  limit = 1000000000;
  const divisionMatch = { isHidden: false, isArchived: false };
  const divisionSelct = 'name force army type';
  const select = '';
  const sort = sortObj.sort;
  const populate = [
    {
      path: 'divisionId',
      match: divisionMatch,
      select: divisionSelct
    },
    {
      path: 'brigadeId',
      match: divisionMatch,
      select: divisionSelct
    },
    {
      path: 'battalionId',
      match: divisionMatch,
      select: divisionSelct
    },
    {
      path: 'companyId',
      match: divisionMatch,
      select: divisionSelct
    }
  ];
  const { divisions, total, hasNext } = await model.getDivisions({
    query,
    select,
    sort,
    limit,
    populate
  });

  if (divisions && divisions.length !== 0) {
    return { total, hasNext, divisions };
  }
  return { total: 0, hasNext: false, divisions: [] };
};
