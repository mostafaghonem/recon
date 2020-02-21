const model = require('../models');

module.exports = ({
  ApplicationError,
  logger,
  updateIdentification,
  REQUEST_RESPONSE
}) => async ({ requestId, status, note = '' }) => {
  const query = {
    _id: requestId,
    status: 'pending',
    isArchived: false
  };
  const select = 'userId identificationImages';
  const request = await model.getOne({ query, select });
  if (request) {
    if (status === REQUEST_RESPONSE.ACCEPTED) {
      await updateIdentification(request.userId, request.identificationImages);
    }
    const update = {
      status,
      note
    };
    await model.updateOneById({
      id: requestId,
      update
    });

    logger.info(
      `admin just ${status}  ${request.userId} request to update his identity`
    );
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الطلب', 403);
};
