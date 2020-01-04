/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');

// use Entity as much as possible use model for only urgent cases
// const Model = require('../models');

// should have no implementation for any specific orm
module.exports = ({}) => async ({}) => {
  const e = new UserEntity();
  e.loadDataFromDbById();
};
