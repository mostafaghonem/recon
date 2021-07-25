/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  key,
  value,
  keys,
  values
}) => {
  const keysArray = keys ? keys.split(',') : [];
  const valuesArray = values ? values.split(',') : [];
  const multi = keys && values && keysArray.length === valuesArray.length;

  if (multi) {
    const query = {};
    keysArray.map((o, i) => {
      query[o] = valuesArray[i];
    });

    console.log('multi query', query);
    return Models.checkExistenceByAnd(query);
  }
  return Models.checkExistenceBy({ [key]: value });
};
