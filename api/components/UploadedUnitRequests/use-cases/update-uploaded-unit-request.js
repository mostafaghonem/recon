const model = require('../models');

module.exports = ({
  ApplicationError,
  logger,
  updateUnitEditStatus,
  setRequestsProcessedStatus,
  accepted
}) => async ({ requestId, status, note = '' }) => {
  const query = {
    _id: requestId,
    isArchived: false
  };
  const select = 'unitId update';
  const request = await model.getOne({ query, select });
  if (request) {
    const params = { unitId: request.unitId, isEditing: false, note };
    const update = {
      status,
      note
    };
    params.update = update;
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(params);
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    await updateUnitEditStatus(params);
    await setRequestsProcessedStatus({ requestId, unitId: request.unitId });
    console.log('cccccccccccccccccccccccccccc');
    console.log(update);
    console.log('cccccccccccccccccccccccccccc');
    await model.updateOneById({
      id: requestId,
      update
    });
    logger.info(`admin just ${status}  ${requestId} uploaded unit request`);
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الطلب', 403);
};
