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
  isEditing,
  note,
  update
}) => {
  let obj = {
    isEditing,
    note
  };

  if (update) {
    delete update._id;
    delete update.status;
    delete update.note;
    delete update.isEditing;
    delete update.isFull;
    delete update.isHidden;
    delete update.isArchived;
    obj = { isEditing, note, ...update };
  }
  const units = await model.updateOneById({
    id: unitId,
    update: obj
  });
  return units;
};
