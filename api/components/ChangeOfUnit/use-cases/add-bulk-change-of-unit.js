/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getSoldiersByIds,
  getStaffsByIds,
  getDivisionById,
  addChangeOfUnit
}) => async ({ user, soldiersIds, staffsIds, unitId }) => {
  const userId = user.id;
  try {
    const updateObj = {};
    let individuals = [];
    let type = 'soldier';
    if (soldiersIds && soldiersIds.length) {
      individuals = await getSoldiersByIds({ ids: soldiersIds });
    } else if (staffsIds && staffsIds.length) {
      individuals = await getStaffsByIds({ ids: staffsIds });
      type = 'staff';
    }
    const unit = await getDivisionById({ id: unitId });
    const promises = individuals.map(async data => {
      return addChangeOfUnit({
        user,
        userId,
        data,
        type,
        unit,
        unitId,
        updateObj
      });
    });

    Promise.all(promises).then(responses => {
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
    });

    return unit.id;
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
