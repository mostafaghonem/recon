const model = require('../models');

module.exports = ({ ApplicationError, logger, updateUnitStatus }) => async ({
  requestId,
  status,
  note = ''
}) => {
  const query = {
    _id: requestId,
    status: 'pending',
    isArchived: false
  };
  const select = 'unitId';
  const request = await model.getOne({ query, select });
  if (request) {
    await updateUnitStatus({ unitId: request.unitId, status, note });
    const update = {
      status,
      note
    };
    await model.updateOneById({
      id: requestId,
      update
    });

    logger.info(`admin just ${status}  ${requestId} uploaded unit request`);
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الطلب', 403);
};
