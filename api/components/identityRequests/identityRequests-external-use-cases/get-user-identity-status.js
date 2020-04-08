const Model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async userId => {
  const query = {
    userId
  };
  const select = 'identificationImages status note';
  const sort = { createdAt: -1 };
  const userStatus = await Model.getMany({ query, select, sort });
  let userIdentityStatus = {
    identificationImages: [],
    status: 'No Identity Yet!',
    note: ''
  };
  if (userStatus && userStatus.length !== 0) userIdentityStatus = userStatus[0];

  return userIdentityStatus;
};
