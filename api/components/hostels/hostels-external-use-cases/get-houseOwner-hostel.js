/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async (userId, id) => {
  const query = { _id: id, userId, isArchived: false };
  const select =
    'name description phone email managerEmail image currency address freeServices generalServices hostelServices entertainmentServices foodServices rooms totalRate totalUsersRated totalOnlineBooking totalRevenue';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);

  return checkExistence;
};
