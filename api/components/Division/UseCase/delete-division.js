/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getSoldiersByUnitId
}) => async id => {
  const query = { _id: id, isArchived: false };
  const checkExistence = await model.getOne({ query });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  else {
    const checkAvailability = await getSoldiersByUnitId({ unitId: id });
    if (checkAvailability && checkAvailability.length) {
      throw new ApplicationError(
        '.لا يمكنك حذف الوحدة بينما يوجد مجندين بها',
        403
      );
    }

    // const update = {
    //   isArchived: true
    // };
    // await model.updateOneById({ id, update });
    await model.deleteOneById({ id });

    logger.info(`${id} Division just got deleted now`);
  }
};
