/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  createUnitEvent,
  editUploadedUnitsRequests,
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
  const filter = { _id: unitId, userId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
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

  await editUploadedUnitsRequests({ userId, unitId, update });
  await createUnitEvent({
    userId,
    unitId,
    eventType: events.UNITS_REQUEST_EDIT_UNIT
  });
  //   await model.updateOneById({
  //     id: unitId,
  //     update
  //   });

  logger.info(`${unitId} Unit updated Successfully`);
};
