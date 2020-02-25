/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger, accepted }) => async ({
  userId,
  hostelId,
  rate
}) => {
  const query = { _id: hostelId, status: accepted, isArchived: false };
  const select = 'totalRate totalUsersRated rates';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);
  const checkUserRate = checkExistence.rates.filter(
    userRate => String(userRate.userId) === String(userId)
  );
  let update = {};
  let totalRate;
  let finalRate;
  if (checkUserRate[0]) {
    const filter = {
      _id: hostelId,
      'rates.userId': userId
    };
    totalRate = checkExistence.totalRate - checkUserRate[0].rate + Number(rate);
    finalRate = Number(totalRate) / Number(checkExistence.totalUsersRated);
    update = {
      $set: { 'rates.$.rate': Number(rate) },
      totalRate,
      rate: finalRate
    };
    await model.update({ filter, update });
  } else {
    const totalUsersRated = Number(checkExistence.totalUsersRated) + 1;
    totalRate = checkExistence.totalRate + Number(rate);
    finalRate = Number(totalRate) / Number(totalUsersRated);
    update.totalUsersRated = totalUsersRated;
    update.totalRate = totalRate;
    update.rate = finalRate;
    update.$push = { rates: { userId, rate } };
    await model.updateOneById({ id: hostelId, update });
  }

  logger.info(`${hostelId} rate is updated successfully`);
};
