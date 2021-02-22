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
module.exports = ({ getUnAnsweredMails, GetSortObj }) => async ({
  type,
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
  // #! Added for the poc case
  limit = 10000000000;

  const select = '';
  const sort = sortObj.sort;
  const { constants, total, hasNext } = await model.getconstants({
    query,
    select,
    sort,
    limit
  });

  constants.UNANSWERED = await getUnAnsweredMails({});
  if (constants && constants.length !== 0) {
    return { total, hasNext, constants };
  }
  return { total: 0, hasNext: false, constants: [] };
};
