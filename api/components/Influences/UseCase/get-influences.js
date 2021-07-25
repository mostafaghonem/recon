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
  influenceId,
  soldierId,
  type,
  date,
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
  if (userId) query.userId = userId;
  if (influenceId) query.force = influenceId;
  if (soldierId) query.soldierId = soldierId;
  if (date) query.date = date;
  if (type) query.type = String(type);
  // if (userId) query.userId = userId;
  // #! Added for the poc case
  limit = 1000000000;
  const select = '';
  const sort = sortObj.sort;
  const populate = [];
  const { influences, total, hasNext } = await model.getInfluences({
    query,
    select,
    sort,
    limit,
    populate
  });

  if (influences && influences.length !== 0) {
    return { total, hasNext, influences };
  }
  return { total: 0, hasNext: false, influences: [] };
};
