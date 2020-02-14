/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async id => {
  const query = { _id: id, isArchived: false };
  const select =
    'name description image currency address freeServices generalServices hostelServices entertainmentServices foodServices rooms totalRate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);

  return checkExistence;
};
