/* eslint-disable no-unused-vars */
//! only require Entity/model
const { EventEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getUsersByPermissions,
  _
}) => async ({
  type,
  userId,
  username,
  message,
  objectId,
  objectName,
  objectType,
  timestamp = new Date().getTime(),
  eventCounter,
  targets = {},
  permissions = [],
  createdAt
}) => {
  if (permissions && permissions.length) {
    const targetsObj = await getUsersByPermissions(permissions);
    if (targetsObj[userId]) {
      delete targetsObj[userId];
    }
    if (targetsObj && !_.isEmpty(targetsObj)) {
      // eslint-disable-next-line no-param-reassign
      targets = targetsObj;
    }
  }

  const Event = new EventEntity({
    type,
    userId,
    username,
    message,
    objectId,
    objectType,
    objectName,
    timestamp,
    eventCounter,
    targets,
    createdAt
  });

  await Event.save();

  logger.info(
    `new event just been added with data => \n${JSON.stringify(
      Event.toJson(),
      undefined,
      6
    )}`
  );
  return Event.id;
};
