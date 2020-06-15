const model = require('../models');

module.exports = ({ ApplicationError, logger, updateOfficeStatus }) => async ({
  requestId,
  status,
  note = ''
}) => {
  const query = {
    _id: requestId,
    status: 'pending',
    isArchived: false
  };
  const select = 'officeId';
  const request = await model.getOne({ query, select });
  if (request) {
    await updateOfficeStatus({ officeId: request.officeId, status, note });
    const update = {
      status,
      note
    };
    await model.updateOneById({
      id: requestId,
      update
    });

    logger.info(`admin just ${status}  ${requestId} uploaded office request`);
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الطلب', 403);
};
