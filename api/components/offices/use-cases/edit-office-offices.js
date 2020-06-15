/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices
}) => async ({
  userId,
  officeId,
  groupId,
  name,
  images,
  numberOfPersons,
  Type,
  totalOffices,
  floorNumber,
  totalAvailableOffices,
  pricePerPerson,
  pricePer
}) => {
  const filter = {
    _id: officeId,
    userId,
    'offices._id': groupId,
    isArchived: false
  };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);

  // TODO call gamal service
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);
  const getOfficeReservation = await getReservedOfficeCountByOffices(
    [officeId],
    availableFrom,
    new Date(availableTo).getTime()
  );
  let totalOnlineBookedOffices = 0;
  if (getOfficeReservation) {
    const getOfficeData = getOfficeReservation.filter(
      reservedOffice => String(reservedOffice._id) === String(officeId)
    );
    if (getOfficeData[0] && getOfficeData[0].offices) {
      const getGroupData = getOfficeData[0].offices.filter(
        office => String(office.groupId) === String(groupId)
      );
      totalOnlineBookedOffices = getGroupData[0].totalReservedCount || 0;
    }
  }
  if (Number(totalOffices) < Number(totalOnlineBookedOffices))
    throw new ApplicationError(
      'لا يمكن ان يكون عدد الاماكن الكلى اقل من العدد المحجوز حاليا',
      400
    );
  else if (
    Number(totalAvailableOffices) >
    Number(totalOffices) - Number(totalOnlineBookedOffices)
  )
    throw new ApplicationError(
      'لا يمكن ان يكون عدد الاماكن المتاحة اكبر من العدد المسموح به',
      400
    );

  const query = {
    _id: officeId,
    'offices._id': groupId
  };
  const update = {
    $set: {
      'offices.$.name': name,
      'offices.$.images': images,
      'offices.$.numberOfPersons': numberOfPersons,
      'offices.$.Type': Type,
      'offices.$.totalOffices': totalOffices,
      'offices.$.floorNumber': floorNumber,
      'offices.$.totalAvailableOffices': totalAvailableOffices,
      'offices.$.pricePerPerson': pricePerPerson,
      'offices.$.pricePer': pricePer
    }
  };
  await model.update({ filter: query, update });

  logger.info(
    `${groupId} group in ${officeId} Office Offices updated Successfully`
  );
};
