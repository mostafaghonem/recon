/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async id => {
  const query = { _id: id, isArchived: false };
  const select = 'availableCountNow';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  else {
    const checkAvailability = checkExistence.availableCountNow;
    if (checkAvailability && checkAvailability === 0) {
      throw new ApplicationError(
        '.لا يمكنك حذف الوحدة بينما يوجد أشخاص بحجزونها',
        403
      );
    }

    const update = {
      isArchived: true
    };
    await model.updateOneById({ id, update });

    logger.info(`${id} Division just got deleted now`);
  }
};
