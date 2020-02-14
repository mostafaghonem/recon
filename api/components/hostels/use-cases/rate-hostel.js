/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  hostelId,
  rate
}) => {
  const query = { _id: hostelId, isArchived: false };
  const select = 'totalRate totalUsersRated rates';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);
  const checkUserRate = checkExistence.rates.filter(
    userRate => String(userRate.userId) === String(userId)
  );
  let update = {};
  if (checkUserRate[0]) {
    const filter = {
      _id: hostelId,
      'rates.userId': userId
    };
    update = {
      $set: { 'rates.$.rate': Number(rate) },
      totalRate: checkExistence.totalRate - checkUserRate[0].rate + Number(rate)
    };
    await model.update({ filter, update });
  } else {
    update.totalUsersRated = checkExistence.totalUsersRated + 1;
    update.totalRate = checkExistence.totalRate + Number(rate);
    update.$push = { rates: { userId, rate } };
    await model.updateOneById({ id: hostelId, update });
  }

  logger.info(`${hostelId} rate is updated successfully`);
};
