const Model = require('../models/UserFavoriteUnitsIndex');
const { UserFavoriteUnitsEntity } = require('../Entity');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, logger }) => async ({
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

  const newRecord = new UserFavoriteUnitsEntity({
    userId,
    unitId,
    favorite: true
  });
  await newRecord.save();
  logger.info(
    `user has just added unit to his favorites with data => \n${JSON.stringify(
      newRecord.toJson(),
      undefined,
      6
    )}`
  );
  return newRecord.id;
};
