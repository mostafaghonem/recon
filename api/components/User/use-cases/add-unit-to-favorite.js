const Model = require('../models/UserFavoriteUnitsModel');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, GetSortObj }) => async ({
  userId,
  unitId
}) => {
  const query = { unitId, userId };
  const checkExistence = await Model.getOne({
    query,
    select: { _id: 1, favorite: 1 }
  });
  if (checkExistence && checkExistence.favorite)
    throw new ApplicationError('نأسف , هذه الوحدة بالفعل فى مفضلتك', 403);

  if (checkExistence && !checkExistence.favorite) {
    return Model.updateOneById({
      id: checkExistence._id,
      update: { favorite: true }
    });
  }

  return true;
};
