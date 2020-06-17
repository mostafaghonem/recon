const Model = require('../models/UserFavoriteOfficesIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError }) => async ({ userId, OfficesIds }) => {
  if (!userId) throw new ApplicationError('You should pass userId');
  console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
  console.log(userId);
  console.log(OfficesIds);
  console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
  if (!Array.isArray(OfficesIds))
    throw new ApplicationError(
      'You should pass ids as array to getOfficesFavorability (User external service)'
    );
  const result = {};
  OfficesIds.forEach(id => {
    result[id.toString()] = null;
  });

  const Offices = await Model.getOfficesWithIds(userId, OfficesIds, {
    favorite: true
  });
  Offices.map(u => {
    result[u.OfficeId.toString()] = {
      favorite: u.favorite
    };
    return true;
  });
  return result;
};
