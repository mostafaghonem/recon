/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  isGroupBusyInDateTs,
  officesStatus
}) => async ({ userId, officeId, groupId, totalOffices, status }) => {
  const query = {
    _id: officeId,
    userId,
    'offices._id': groupId,
    isArchived: false
  };
  const select = { offices: { $elemMatch: { _id: groupId } } };
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);

  let totalOnlineBookedOffices = 0;
  const checkOnlineBookings = await isGroupBusyInDateTs(
    [officeId],
    [groupId],
    new Date().getTime()
  );
  if (checkOnlineBookings[0]) {
    const checkGroup = checkOnlineBookings.filter(
      group => String(group._id) === String(groupId)
    );
    if (checkGroup[0])
      totalOnlineBookedOffices = Number(checkGroup[0].totalReservedCount) || 0;
  }
  let totalAvailableOffices = 0;
  let allowedOfficesCount = 0;
  if (status === officesStatus.AVAILABLE) {
    allowedOfficesCount =
      checkExistence.offices[0].totalOffices -
      checkExistence.offices[0].totalAvailableOffices -
      Number(totalOnlineBookedOffices);
    totalAvailableOffices =
      checkExistence.offices[0].totalAvailableOffices + Number(totalOffices);
  } else {
    allowedOfficesCount =
      checkExistence.offices[0].totalAvailableOffices -
      Number(totalOnlineBookedOffices);
    totalAvailableOffices =
      checkExistence.offices[0].totalAvailableOffices - Number(totalOffices);
  }
  if (Number(totalOffices) > allowedOfficesCount)
    throw new ApplicationError(
      'لا يمكن ان يكون عدد الاماكن المتاحة اكبر من او يساوى العدد المسموح به',
      400
    );

  const filter = {
    _id: officeId,
    'offices._id': groupId
  };
  const update = {
    $set: {
      'offices.$.totalAvailableOffices': totalAvailableOffices
    }
  };
  await model.update({ filter, update });

  logger.info(
    `${groupId} group in ${officeId} Office Offices availability updated Successfully`
  );
};
