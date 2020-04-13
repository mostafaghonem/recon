/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  createUnitEvent,
  editUploadedUnitsRequests,
  setRequestsProcessedStatus,
  events
}) => async ({
  userId,
  unitId,
  type,
  description,
  image,
  gallery,
  currency,
  address,
  rentersType,
  numberOfPeople,
  numberOfRooms,
  hasFurniture,
  availableCountNow,
  pricePerPerson,
  dailyOrMonthly,
  highlight,
  availability,
  services,
  conditions
}) => {
  const query = { _id: unitId, userId, isArchived: false };
  const checkExistence = await model.getOne({
    query,
    select: { _id: 1, isEditing: 1 }
  });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  if (checkExistence.isEditing)
    throw new ApplicationError(
      'نأسف ، لا يمكنك تعديل وحدة قيد إنتظار التعديل',
      403
    );
  const update = {
    description,
    currency,
    address,
    image,
    type,
    rentersType,
    numberOfPeople,
    numberOfRooms,
    hasFurniture,
    availableCountNow,
    pricePerPerson,
    dailyOrMonthly,
    highlight,
    availability,
    services,
    conditions,
    gallery
  };

  await model.setUnitEditStatus({ unitId, isEditing: true });
  await setRequestsProcessedStatus({ unitId });
  await editUploadedUnitsRequests({ userId, unitId, update });
  await createUnitEvent({
    userId,
    unitId,
    eventType: events.UNITS_REQUEST_EDIT_UNIT
  });
  logger.info(`${unitId} Unit updated Successfully`);
};
