const model = require('../models');

module.exports = ({
  ApplicationError,
  logger,
  updateUnitStatus,
  accepted
}) => async ({ requestId, status, note = '' }) => {
  const query = {
    _id: requestId,
    status: 'pending',
    isArchived: false
  };
  const select = 'unitId update';
  const request = await model.getOne({ query, select });
  if (request) {
    let params;
    if (request.update && status === accepted) {
      params = { unitId: request.unitId, status, note, update };
    } else {
      params = { unitId: request.unitId, status, note };
    }

    await updateUnitStatus(params);
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
