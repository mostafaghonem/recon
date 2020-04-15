const Model = require('../models/UserFavoriteHostelsIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError }) => async ({ userId, hostelsIds }) => {
  if (!userId) throw new ApplicationError('You should pass userId');
  if (!Array.isArray(hostelsIds))
    throw new ApplicationError(
      'You should pass ids as array to getHostelsFavorability (User external service)'
    );
  const result = {};
  hostelsIds.forEach(id => {
    result[id.toString()] = null;
  });

  const hostels = await Model.getHostelsWithIds(userId, hostelsIds, {
    favorite: true
  });
  hostels.map(u => {
    result[u.hostelId.toString()] = {
      favorite: u.favorite
    };
    return true;
  });
  return result;
};
