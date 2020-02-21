const { IdentityRequestsEntity } = require('../Entity');

const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  identificationImages
}) => {
  const newIdentityRequest = new IdentityRequestsEntity({
    userId,
    identificationImages
  });
  await newIdentityRequest.save();

  logger.info(
    `new identity request added with data => \n${JSON.stringify(
      newIdentityRequest.toJson(),
      undefined,
      6
    )}`
  );
};
