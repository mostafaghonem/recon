const model = require('../models');
// should have no implementation for any specific orm
module.exports = ({ ApplicationError }) => async ({
  userId,
  limit,
  rest,
  sortObj
}) => {
  const { requests, hasNext } = await model.getMyRequests(
    userId,
    limit,
    rest,
    sortObj
  );

  if (!requests) {
    throw new ApplicationError('Unable to get user own units requests');
  }

  if (requests && requests.length !== 0) {
    return { data: requests, hasNext };
  }
  return { data: [], hasNext: false };
};
