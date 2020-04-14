const Model = require('../models/UserFavoriteUnitsIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, GetSortObj }) => async ({
  userId,
  sortIndex,
  sortKey,
  sortValue,
  limit
}) => {
  if (!userId) throw new ApplicationError('You should pass userId');
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const rest = sortObj.query[0] || sortObj.query;
  const results = await Model.getFavouriteUnits(userId, limit, rest, sortObj);
  return results;
};
