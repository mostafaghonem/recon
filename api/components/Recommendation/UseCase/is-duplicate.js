/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({ key, value }) => {
  return Models.checkExistenceBy({ [key]: value });
};
