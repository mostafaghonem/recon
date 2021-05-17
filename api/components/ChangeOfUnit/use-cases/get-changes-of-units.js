const model = require('../models');

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
  GetSortObj,
  GetSearchObj,
  moment
}) => async ({
  status,
  type,
  key,
  limit,
  lastTimestamp,
  unitId,
  sortIndex,
  sortKey,
  sortValue
}) => {
  // eslint-disable-next-line no-param-reassign
  type = type || 'soldier';
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const sort = sortObj.sort;
  const query = {
    ...sortObj.query,
    status,
    isArchived: false
  };

  const select =
    'userId status type unitId soldierId staffId date createdAt updatedAt';

  if (lastTimestamp) {
    query.createdAt = { $gt: moment(lastTimestamp) };
  }

  if (type === 'staff') {
    query.staffId = { $exists: true };
  } else {
    query.soldierId = { $exists: true };
  }
  const unitQuery = { isArchived: false };
  const searchObj = GetSearchObj({ key });
  if (searchObj) {
    unitQuery.$or = searchObj;
  }
  const populate = [
    {
      path: 'userId',
      select: '_id username branch permissions'
    },
    {
      path: 'unitId',
      match: unitQuery,
      select: '_id name'
    },
    {
      path: 'pastUnit.unitId',
      match: unitQuery,
      select: '_id name'
    },
    {
      path: 'soldierId',
      match: unitQuery,
      select: '_id militaryId fullName'
    },
    {
      path: 'staffId',
      match: unitQuery,
      select: '_id militaryId fullName'
    }
  ];

  const params = {
    query,
    select,
    sort,
    skip: 0,
    limit,
    populate
  };

  if (unitId) {
    params.populate.push({
      path: 'unitId',
      match: { isArchived: false },
      select: {
        isArchived: false,
        isHidden: false
      }
    });

    params.select += ` update`;
  }
  // eslint-disable-next-line prefer-const
  let { changes, total, hasNext } = await model.getChanges(params);
  changes = changes.filter(request => {
    const unit = request.userId && request.unitId;
    const individual = !!request[`${type}Id`];
    return unit && individual;
  });

  return {
    changes,
    total,
    hasNext
  };
};
