const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, getSortObj, moment }) => async ({
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
  const sortObj = getSortObj({
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

  const select = 'userId status unitId createdAt updatedAt';

  if (lastTimestamp) {
    query.createdAt = { $gt: moment(lastTimestamp) };
  }

  if (type) {
    query.type = type;
  }

  const populate = {
    path: 'userId',
    match: { isArchived: false, fullName: { $regex: key, $options: 'i' } },
    select: '_id fullName gender job birthDateTs createdAt'
  };

  const params = {
    query,
    select,
    sort,
    skip: 0,
    limit,
    populate
  };

  if (unitId) {
    params.anotherPopulate = {
      path: 'unitId',
      match: { isArchived: false },
      select: {
        isArchived: false,
        isHidden: false
      }
    };

    params.select += ` update`;
  }
  let requests = await model.getMany(params);
  requests = requests.filter(request => request.userId && request.unitId);

  return requests;
};
