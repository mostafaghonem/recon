const model = require('../models');

module.exports = ({ ApplicationError, logger, updateHostelData }) => async ({
  requestId,
  status,
  note = ''
}) => {
  const query = {
    _id: requestId,
    status: 'pending',
    isArchived: false
  };
  const select = 'hostelId hostel userId';
  const request = await model.getOne({ query, select });
  if (request) {
    const filter = {
      userId: request.userId,
      hostelId: request.hostelId,
      status
    };
    const requestUpdate = {
      isArchived: true
    };
    await model.updateManyByFilter({ filter, update: requestUpdate });
    if (status === 'accepted')
      await updateHostelData({
        hostelId: request.hostelId,
        hostel: request.hostel
      });
    const update = {
      status,
      note
    };
    await model.updateOneById({
      id: requestId,
      update
    });

    logger.info(`admin just ${status}  ${requestId} edit hostel request`);
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الطلب', 403);
};
