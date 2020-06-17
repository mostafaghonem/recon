/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  getSimilarOffices,
  accepted
}) => async ({ officeId, userId }) => {
  const query = { _id: officeId, status: accepted, isArchived: false };
  const select =
    'name description image currency address isHidden freeServices generalServices officeServices entertainmentServices offices rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);
  const getOfficeReservation = await getReservedOfficeCountByOffices(
    [officeId],
    availableFrom,
    new Date(availableTo).getTime()
  );
  checkExistence.totalOffices = 0;
  checkExistence.totalAvailableOffices = 0;
  checkExistence.available = false;
  if (checkExistence.offices[0]) {
    const getOfficeData = getOfficeReservation.filter(
      reservedOffice =>
        String(reservedOffice._id) === String(checkExistence._id)
    );
    checkExistence.offices.forEach(group => {
      if (getOfficeData[0]) {
        const getGroupData = getOfficeData[0].offices.filter(
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
          if (group.availableOffices > 0) {
            group.available = true;
            checkExistence.available = true;
          }
        }
      } else {
        checkExistence.totalOffices += Number(group.totalOffices);
        checkExistence.totalAvailableOffices += Number(
          group.totalAvailableOffices
        );
        group.availableOffices = Number(group.totalAvailableOffices);
        if (group.availableOffices > 0) {
          group.available = true;
          checkExistence.available = true;
        } else group.available = false;
      }
    });
  }
  checkExistence.similarOffices = [];
  const response = await getSimilarOffices({ checkExistence, userId });
  return response;
};
