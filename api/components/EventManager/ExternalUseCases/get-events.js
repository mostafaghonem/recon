/* eslint-disable no-param-reassign */
const model = require('../Models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {events} returns array of events
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, AdminEventTypes }) => async ({
  admin,
  lastId,
  type,
  userId,
  objectId,
  objectType,
  targetId,
  seen,
  timestamp,
  limit
}) => {
  const query = {
    _id: { $gt: lastId }
  };

  if (admin) {
    query.type = {
      $in: AdminEventTypes
    };
  }
  query.type = {
    $nin: AdminEventTypes
  };
  if (type) query.type = type;
  if (userId) query.userId = userId;
  if (objectId) query.objectId = objectId;
  if (objectType) query.objectType = objectType;
  if (targetId) query[`targets.${targetId}`] = { $exists: true };
  if (typeof seen !== 'undefined') query[`targets.${targetId}.seen`] = !!seen;
  if (timestamp) query.timestamp = timestamp;

  const select = '';
  const sort = { createdAt: 1 };
  const events = await model.getMany({
    query,
    select,
    sort,
    skip: 0,
    limit
  });

  return events;
};
