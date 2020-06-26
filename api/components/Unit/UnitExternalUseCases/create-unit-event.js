/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  getUsersByIds,
  createEvent,
  updateEvent,
  eventsTypes,
  objectsTypes,
  messages,
  permissions
}) => async ({ userId, unitId, unit, eventType }) => {
  const check = Object.keys(eventsTypes).find(
    key => eventsTypes[key] === eventType
  );
  if (!check) {
    throw new ApplicationError(
      'unable to set an events type that doesnt exist'
    );
  }

  const users = await getUsersByIds([userId]);

  if (!users[userId.toString()]) {
    throw new ApplicationError('unable to find the event creator');
  }
  const event = {
    userId: users[userId.toString()],
    username: users[userId.toString()].fullName,
    type: eventType,
    objectId: unitId,
    objectType: objectsTypes.UNIT,
    message: messages[check],
    permissions: [permissions.ADMIN]
  };

  return createEvent(event);
};
