const model = require('../models');

function compare(arr1, arr2) {
  let result = false;

  if (!arr1 || !arr2) return result;
  if (arr1.length !== arr2.length) return result;

  result = true;
  arr1.forEach(value => {
    if (!arr2.includes(value)) result = false;
  });

  return result;
}

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, addIdentityRequests }) => async (
  userId,
  updatedProfile
) => {
  const select = 'identificationImages';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    const identificationImages = user.identificationImages || [];
    updatedProfile.identificationImages.forEach(url => {});
    // const compareImages = compare(
    //   identificationImages,
    //   updatedProfile.identificationImages
    // );
    // if (!compareImages) {
    //   await addIdentityRequests({
    //     userId,
    //     identificationImages: updatedProfile.identificationImages
    //   });
    //   delete updatedProfile.identificationImages;
    // }
    await model.updateOneById({
      id: userId,
      update: updatedProfile
    });

    logger.info(`${userId} just updated his profile`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
