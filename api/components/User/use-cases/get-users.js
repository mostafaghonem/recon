/* eslint-disable no-param-reassign */
const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ GetSortObj }) => async ({
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
        username: { $regex: key, $options: 'i' }
      },
      {
        fullName: { $regex: key, $options: 'i' }
      }
    ];
  }

  const select = 'fullName username permissions isFull createdAt updatedAt';
  const sort = sortObj.sort;
  const { users, total, hasNext } = await model.getUsers({
    query,
    select,
    sort,
    limit
  });
  if (users && users.length !== 0) {
    return { total, hasNext, users };
  }
  return { total: 0, hasNext: false, users: [] };
};
