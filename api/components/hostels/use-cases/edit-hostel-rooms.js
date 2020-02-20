/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  hostelId,
  groupId,
  name,
  images,
  numberOfPersons,
  toilet,
  Type,
  totalRooms,
  floorNumber,
  totalAvailableRooms,
  pricePerPerson,
  pricePer
}) => {
  const filter = {
    _id: hostelId,
    userId,
    'rooms._id': groupId,
    isArchived: false
  };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على هذا الفندق او هذة الغرف',
      403
    );

  // TODO call gamal service
  const totalOnlineBookedRooms = 1;
  if (Number(totalRooms) < Number(totalOnlineBookedRooms))
    throw new ApplicationError(
      'لا يمكن ان يكون عدد الاماكن الكلى اكبر من العدد المحجوز حاليا',
      400
    );
  else if (
    Number(totalAvailableRooms) >
    Number(totalRooms) - Number(totalOnlineBookedRooms)
  )
    throw new ApplicationError(
      'لا يمكن ان يكون عدد الاماكن المتاحة اكبر من العدد المسموح به',
      400
    );

  const query = {
    _id: hostelId,
    'rooms._id': groupId
  };
  const update = {
    $set: {
      'rooms.$.name': name,
      'rooms.$.images': images,
      'rooms.$.numberOfPersons': numberOfPersons,
      'rooms.$.toilet': toilet,
      'rooms.$.Type': Type,
      'rooms.$.totalRooms': totalRooms,
      'rooms.$.floorNumber': floorNumber,
      'rooms.$.totalAvailableRooms': totalAvailableRooms,
      'rooms.$.pricePerPerson': pricePerPerson,
      'rooms.$.pricePer': pricePer
    }
  };
  await model.update({ filter: query, update });

  logger.info(
    `${groupId} group in ${hostelId} Hostel Rooms updated Successfully`
  );
};
