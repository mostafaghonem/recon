const Model = require('../models/UserFavoriteUnitsIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({
  moment,
  ApplicationError,
  GetSearchObj,
  GetSortObj,
  GetUnitsAvailbility
}) => async ({ userId, sortIndex, sortKey, sortValue, limit, key }) => {
  let unitsAvailbility = {};
  const availableFrom = moment().toDate();
  const availableTo = moment();
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
  const unitsIds = [];
  results.data.map(unit => unitsIds.push(unit.unitId._doc._id));
  unitsAvailbility = await GetUnitsAvailbility({
    unitsIds,
    availableFrom,
    availableTo
  });

  results.data = results.data.map(o => ({
    ...o.unitId._doc,
    available: !!unitsAvailbility[o.unitId._doc._id],
    favorite_id: o._id,
    favorite: o.favorite,
    displayFavorite: true
  }));

  return results;
};
