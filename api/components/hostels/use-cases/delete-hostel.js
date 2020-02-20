/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async id => {
  const query = { _id: id, isArchived: false };
  const select = 'rooms';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);
  else {
    const checkAvailability = checkExistence.rooms.filter(
      room => room.totalRooms !== room.totalAvailableRooms
    );
    if (checkAvailability[0])
      throw new ApplicationError(
        '.لا يمكنك حذف الفندق بينما يوجد أشخاص يحجزونه',
        403
      );
    const update = {
      isArchived: true
    };
    await model.updateOneById({ id, update });

    logger.info(`${id} Hostel just got deleted now`);
  }
};
