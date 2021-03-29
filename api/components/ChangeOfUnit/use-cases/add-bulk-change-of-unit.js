/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getSoldiersByIds,
  getDivisionById,
  addChangeOfUnit
}) => async ({ user, soldiersIds, unitId }) => {
  const userId = user.id;
  try {
    const updateObj = {};

    const soldiers = await getSoldiersByIds({ ids: soldiersIds });
    const unit = await getDivisionById({ id: unitId });
    const promises = soldiers.map(async soldier => {
      return addChangeOfUnit({
        user,
        userId,
        soldier,
        unit,
        unitId,
        updateObj
      });
    });

    const responses = await Promise.all(promises);
    const errors = responses
      .filter(o => o.error)
      .map(o => o.error)
      .join('\n');
    if (errors.length) {
      throw new ApplicationError(errors, 403);
    }
    logger.info(
      `new Clearance just been added with data => \n${JSON.stringify(
        responses,
        undefined,
        6
      )}`
    );

    return responses.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً ولكن هذا المجند مسجل بالفعل فى قاعدة البيانات',
        401
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('eror in adding clearance', err.message);
      throw new ApplicationError(err.message, 401);
    }
  }

  async function bulkInsertClearances(items) {
    try {
      const response = await model.DbAccess.insertMany(items);
      logger.info(
        `Default influences upserted successfully => upserted: ${response.nUpserted}, modified: ${response.nModified}`
      );
    } catch (error) {
      logger.info(
        `### ERROR ### while upserting Default influences => ${error.message}`
      );
    }
  }
};
