/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger, accepted }) => async ({
  userId,
  officeId,
  rate
}) => {
  const query = { _id: officeId, status: accepted, isArchived: false };
  const select = 'totalRate totalUsersRated rates';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);
  const checkUserRate = checkExistence.rates.filter(
    userRate => String(userRate.userId) === String(userId)
  );
  let update = {};
  let totalRate;
  let finalRate;
  if (checkUserRate[0]) {
    const filter = {
      _id: officeId,
      'rates.userId': userId
    };
    totalRate = checkExistence.totalRate - checkUserRate[0].rate + Number(rate);
    finalRate = Number(totalRate) / Number(checkExistence.totalUsersRated);
    update = {
      $set: { 'rates.$.rate': Number(rate) },
      totalRate,
      rate: Number(finalRate.toFixed(1))
    };
    await model.update({ filter, update });
  } else {
    const totalUsersRated = Number(checkExistence.totalUsersRated) + 1;
    totalRate = checkExistence.totalRate + Number(rate);
    finalRate = Number(totalRate) / Number(totalUsersRated);
    update.totalUsersRated = totalUsersRated;
    update.totalRate = totalRate;
    update.rate = Number(finalRate.toFixed(1));
    update.$push = { rates: { userId, rate } };
    await model.updateOneById({ id: officeId, update });
  }

  logger.info(`${officeId} rate is updated successfully`);
};
