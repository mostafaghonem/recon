/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  _,
  getReservedOfficeCountByOffices
}) => async ({ officeId, fromts, tots, offices }) => {
  try {
    const query = {
      _id: officeId,
      isArchived: false
    };
    const select = 'offices';
    const checkExistence = await model.getOne({ query, select });

    if (!checkExistence) return false;
    if (offices && _.isArray(offices) && offices.length !== 0) {
      const reservedOffices = await getReservedOfficeCountByOffices(
        [officeId],
        fromts,
        tots
      );
      let checkOffice = { offices: [] };
      let allOfficesWereFound = true;
      let validAvailability = true;
      if (reservedOffices && reservedOffices.length !== 0)
        checkOffice = reservedOffices.filter(
          office => String(office._id) === String(officeId)
        )[0] || { offices: [] };
      let cost = 0;
      offices.forEach(office => {
        const checkOfficeOffice =
          checkExistence.offices.filter(
            group => String(group._id) === String(office.groupId)
          )[0] || null;
        if (!checkOfficeOffice) allOfficesWereFound = false;
        else {
          const checkOffices = checkOffice.offices.filter(
            group => String(group.groupId) === String(office.groupId)
          )[0] || { totalReservedCount: 0 };
          const checkAvailability =
            Number(office.totalReservedCount) <=
            Number(checkOfficeOffice.totalOffices) -
              Number(checkOffices.totalReservedCount);
          if (!checkAvailability) validAvailability = false;
          else
            cost +=
              Number(office.totalReservedCount) *
              Number(checkOfficeOffice.pricePerPerson);
        }
      });
      if (allOfficesWereFound && validAvailability) return cost;
      return false;
    }

    return 0;
  } catch (error) {
    return false;
  }
};
