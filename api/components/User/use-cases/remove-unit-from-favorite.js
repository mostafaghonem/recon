const Model = require('../models/UserFavoriteHostelsIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError }) => async ({ userId, hostelId }) => {
  const query = { hostelId, userId };
  const checkExistence = await Model.getOne({
    query,
    select: { _id: 1, favorite: 1 }
  });
  if (!checkExistence || (checkExistence && !checkExistence.favorite))
    throw new ApplicationError('نأسف , هذه الفندق ليست فى مفضلاتك بالفعل', 403);

  if (checkExistence && checkExistence.favorite) {
    return Model.updateOneById({
      id: checkExistence._id,
      update: { favorite: false }
    });
  }

  return true;
};
