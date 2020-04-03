/* eslint-disable no-param-reassign */
const model = require('../Models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {event} returns array of events
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError }) => async ({ eventId, timestamp }) => {
  const query = {};

  if (eventId) query._id = eventId;
  if (timestamp) query.timestamp = timestamp;

  if (!eventId || !timestamp) {
    throw new ApplicationError('يجب عليك إرسال معرف الحدث او وقته');
  }

  const event = model.getOne({ query });
  return event;
};
