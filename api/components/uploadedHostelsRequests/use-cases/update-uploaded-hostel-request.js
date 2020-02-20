const model = require('../models');

module.exports = ({ ApplicationError, logger, updateHostelStatus }) => async ({
  requestId,
  status,
  note = ''
}) => {
  const query = {
    _id: requestId,
    status: 'pending',
    isArchived: false
  };
  const select = 'hostelId';
  const request = await model.getOne({ query, select });
  if (request) {
    await updateHostelStatus({ hostelId: request.hostelId, status, note });
    const update = {
      status,
      note
    };
    await model.updateOneById({
      id: requestId,
      update
    });

    logger.info(`admin just ${status}  ${requestId} uploaded hostel request`);
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الطلب', 403);
};
