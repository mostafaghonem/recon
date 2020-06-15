/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  accepted
}) => async ({ userId, id, officeId }) => {
  const query = {
    _id: id,
    'offices._id': officeId,
    userId,
    isArchived: false
  };
  const select = { offices: { $elemMatch: { _id: officeId } } };
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('. نأسف ، لا يمكننا العثور على هذا المكتب', 403);
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);
  const getOfficesReservation = await getReservedOfficeCountByOffices(
    [id],
    availableFrom,
    new Date(availableTo).getTime()
  );
  checkExistence.totalOffices = 0;
  checkExistence.totalAvailableOffices = 0;
  if (checkExistence.offices[0]) {
    const getOfficesData = getOfficesReservation.filter(
      reservedOffices =>
        String(reservedOffices._id) === String(checkExistence._id)
    );
    checkExistence.offices.forEach(group => {
      if (getOfficesData[0]) {
        const getGroupData = getOfficesData[0].offices.filter(
          office => String(office.groupId) === String(group._id)
        );
        if (getGroupData[0]) {
          checkExistence.totalOffices += Number(group.totalOffices);
          checkExistence.totalAvailableOffices +=
            Number(group.totalOffices) -
            Number(getGroupData[0].totalReservedCount);
          group.availableOffices =
            Number(group.totalOffices) -
            Number(getGroupData[0].totalReservedCount);
        }
      } else {
        checkExistence.totalOffices += Number(group.totalOffices);
        checkExistence.totalAvailableOffices += Number(
          group.totalAvailableOffices
        );
        group.availableOffices = Number(group.totalAvailableOffices);
      }
    });
    return checkExistence.offices[0].availableOffices;
  }
  return 0;
};
