const model = require('../Models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  unitId,
  status,
  note,
  update
}) => {
  let obj = {
    status,
    note
  };

  if (update) {
    delete update._id;
    delete update.status;
    obj = { status, note, ...update };
  }
  const units = await model.updateOneById({
    id: unitId,
    update: obj
  });
  return units;
};
