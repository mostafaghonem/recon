const Model = require('../models/UserFavoriteUnitsIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError }) => async ({ userId, unitsIds }) => {
  if (!userId) throw new ApplicationError('You should pass userId');
  if (!Array.isArray(unitsIds))
    throw new ApplicationError(
      'You should pass ids as array to getUsersByIds (User external service)'
    );
  const result = {};
  unitsIds.forEach(id => {
    result[id.toString()] = null;
  });

  const units = await Model.getUnitsWithIds(userId, unitsIds, {
    favorite: true
  });
  units.map(u => {
    result[u.unitId.toString()] = {
      favorite: u.favorite
    };
    return true;
  });
  return result;
};
