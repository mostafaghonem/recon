const model = require('../models');

module.exports = ({ ApplicationError, logger, updateOfficeData }) => async ({
  requestId,
  status,
  note = ''
}) => {
  const query = {
    _id: requestId,
    status: 'pending',
    isArchived: false
  };
  const select = 'officeId office userId';
  const request = await model.getOne({ query, select });
  if (request) {
    const filter = {
      userId: request.userId,
      officeId: request.officeId,
      status
    };
    const requestUpdate = {
      isArchived: true
    };
    await model.updateManyByFilter({ filter, update: requestUpdate });
    if (status === 'accepted')
      await updateOfficeData({
        officeId: request.officeId,
        office: request.office
      });
    const update = {
      status,
      note
    };
    await model.updateOneById({
      id: requestId,
      update
    });

    logger.info(`admin just ${status}  ${requestId} edit office request`);
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الطلب', 403);
};
