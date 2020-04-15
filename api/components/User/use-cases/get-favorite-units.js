const Model = require('../models/UserFavoriteUnitsIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, GetSearchObj, GetSortObj }) => async ({
  userId,
  sortIndex,
  sortKey,
  sortValue,
  limit,
  key
}) => {
  if (!userId) throw new ApplicationError('You should pass userId');
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const searchObject = GetSearchObj({ key });
  const rest = sortObj.query[0] || sortObj.query;
  const objectRest = searchObject ? { $or: searchObject } : {};
  const results = await Model.getFavouriteUnits(
    userId,
    limit,
    rest,
    sortObj,
    objectRest
  );
  return results;
};
