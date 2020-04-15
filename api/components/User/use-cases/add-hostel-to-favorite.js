const Model = require('../models/UserFavoriteHostelsIndex');
const { UserFavoriteHostelsEntity } = require('../Entity');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  hostelId
}) => {
  const query = { hostelId, userId };
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

  const newRecord = new UserFavoriteHostelsEntity({
    userId,
    hostelId,
    favorite: true
  });
  await newRecord.save();
  logger.info(
    `user has just added hostel to his favorites with data => \n${JSON.stringify(
      newRecord.toJson(),
      undefined,
      6
    )}`
  );
  return newRecord.id;
};
