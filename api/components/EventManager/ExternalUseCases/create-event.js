/* eslint-disable no-unused-vars */
//! only require Entity/model
const { EventEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getUsersByPermissions
}) => async ({
  type,
  userId,
  username,
  message,
  objectId,
  objectName,
  timestamp = new Date().getTime(),
  eventCounter,
  targets = [],
  permissions = [],
  createdAt
}) => {
  if (permissions && permissions.length) {
    // eslint-disable-next-line no-param-reassign
    targets = await getUsersByPermissions(permissions);
  }
  const Event = new EventEntity({
    type,
    userId,
    username,
    message,
    objectId,
    objectName,
    timestamp,
    eventCounter,
    targets,
    createdAt
  });
  await Event.save();

  logger.info(
    `new Unit just been added with data => \n${JSON.stringify(
      Event.toJson(),
      undefined,
      6
    )}`
  );
  return Event.id;
};
