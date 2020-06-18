/* eslint-disable no-unused-vars */
const moment = require('moment');

//! only require Entity/model
const model = require('../Models');
const { PRICE_PER } = require('../../../shared/constants/defaults');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger, _ }) => async ({
  unitId,
  from,
  to
}) => {
  try {
    const query = {
      _id: unitId,
      isArchived: false
    };

    const checkExistence = await model.getOne({ query });

    if (checkExistence) {
      const fromDate = moment(from, 'x');
      const toDate = moment(to, 'x');
      const numberOfPeriod =
        toDate.diff(
          fromDate,
          checkExistence.dailyOrMonthly === PRICE_PER.DAY ? 'days' : 'months'
        ) + 1;
      const total = numberOfPeriod * checkExistence.pricePerPerson;
      const totalAfterExtras =
        checkExistence.dailyOrMonthly === PRICE_PER.DAY
          ? total * 0.3
          : checkExistence.pricePerPerson * 0.3;
      return { total, totalAfterExtras };
    }
    return undefined;
  } catch (error) {
    return false;
  }
};
