/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  getOfficesFavorability,
  accepted
}) => async ({ checkExistence, userId }) => {
  let officesFavorability = {};
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);

  const filter = {
    _id: { $ne: checkExistence._id },
    status: accepted,
    'address.government': String(
      checkExistence.address.government
    ).toLowerCase(),
    $or: [
      {
        'address.government': String(
          checkExistence.address.government
        ).toLowerCase()
      },
      {
        'address.street': {
          $regex: new RegExp(checkExistence.address.street),
          $options: 'i'
        }
      },
      {
        'address.highlight': String(
          checkExistence.address.highlight
        ).toLowerCase()
      },
      {
        'address.nearTo': {
          $regex: new RegExp(checkExistence.address.nearTo),
          $options: 'i'
        }
      },
      {
        name: {
          $regex: new RegExp(checkExistence.name),
          $options: 'i'
        }
      },
      { freeServices: checkExistence.freeServices },
      {
        generalServices: checkExistence.generalServices
      },
      {
        officeServices: checkExistence.officeServices
      },
      {
        entertainmentServices: checkExistence.entertainmentServices
      }
    ],
    isHidden: false,
    isArchived: false
  };
  const project = 'name image rate totalUsersRated offices address.government';
  const sort = { updatedAt: -1 };
  let offices = await model.getMany({
    query: filter,
    select: project,
    sort,
    skip: 0,
    limit: 4
  });
  if (userId) {
    const officesIds = offices && offices.length ? offices.map(o => o._id) : [];
    officesFavorability = await getOfficesFavorability({
      userId,
      officesIds: [checkExistence._id, ...officesIds]
    });
    const favoriteExistance =
      officesFavorability[checkExistence._id.toString()];
    checkExistence.favorite = !!favoriteExistance;
    checkExistence.displayFavorite = true;
  }

  if (offices && !offices.length) {
    delete filter.$or;
    delete filter['address.government'];
    offices = await model.getMany({
      query: filter,
      select: project,
      sort,
      skip: 0,
      limit: 4
    });
  }
  if (offices && offices.length !== 0) {
    const officesIds = [];
    offices.map(office => officesIds.push(office._id));
    const newAvailableFrom =
      new Date(availableFrom).getTime() || new Date().getTime();
    const newAvailableTo =
      availableTo || new Date().setDate(new Date().getDate() + 1);
    const reservedOffices = await getReservedOfficeCountByOffices(
      officesIds,
      newAvailableFrom,
      new Date(newAvailableTo).getTime()
    );
    offices.forEach(office => {
      office.totalOffices = 0;
      office.totalAvailableOffices = 0;
      office.available = false;
      if (office.offices[0]) {
        const getOfficeData = reservedOffices.filter(
          reservedOffice => String(reservedOffice._id) === String(office._id)
        );
        office.offices.forEach(group => {
          if (getOfficeData[0]) {
            const getGroupData = getOfficeData[0].offices.filter(
              officeee => String(officeee.groupId) === String(group._id)
            );
            if (getGroupData[0]) {
              office.totalOffices += Number(group.totalOffices);
              office.totalAvailableOffices +=
                Number(group.totalOffices) -
                Number(getGroupData[0].totalReservedCount);
              group.availableOffices =
                Number(group.totalOffices) -
                Number(getGroupData[0].totalReservedCount);
              if (group.availableOffices > 0) {
                group.available = true;
                office.available = true;
              }
            }
          } else {
            office.totalOffices += Number(group.totalOffices);
            office.totalAvailableOffices += Number(group.totalAvailableOffices);
            group.availableOffices = Number(group.totalAvailableOffices);
            if (group.availableOffices > 0) {
              group.available = true;
              office.available = true;
            } else group.available = false;
          }
        });
      }
      office.favorite = !!officesFavorability[office._id.toString()];
      office.displayFavorite = true;
      checkExistence.similarOffices.push(office);
    });
  }

  return checkExistence;
};
