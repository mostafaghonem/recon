const HostelReservationSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

const getQueryFromStatus = status => {
  let query;
  const nowts = new Date().getTime();

  switch (status) {
    case 'active':
      query = {
        fromts: { $lte: nowts },
        tots: { $gte: nowts }
      };
      break;
    case 'waiting':
      query = {
        fromts: { $gt: nowts }
      };
      break;
    case 'done':
      query = {
        tots: { $lte: nowts }
      };
      break;

    default:
      query = {};
      break;
  }

  return query;
};

module.exports = ({ GenericModel = _GenericModel }) => {
  class HostelReservationModel extends GenericModel {
    async getReservationsWithStatus(status, skip, limit) {
      const query = getQueryFromStatus(status);
      return this.getManyWithMapping(skip, limit, query);
    }

    async getHostelReservationsWithStatus(hostelId, status, skip, limit) {
      let query = getQueryFromStatus(status);
      query = { ...query, hostelId };
      return this.getManyWithMapping(skip, limit, query);
    }

    getReservationsWithStatusForUsers(users, status, skip, limit) {
      let query = getQueryFromStatus(status);
      query = { ...query, renterId: { $in: users } };
      return this.getManyWithMapping(skip, limit, query);
    }

    getHostelReservationsWithStatusForUsers(
      hostelId,
      users,
      status,
      skip,
      limit
    ) {
      let query = getQueryFromStatus(status);
      query = { ...query, renterId: { $in: users }, hostelId };
      return this.getManyWithMapping(skip, limit, query);
    }

    async getManyWithMapping(skip, limit, query) {
      // ! .lean() doesn't work with select
      const dbRet = await this.getMany({ skip, limit, query });
      return dbRet.map(r => ({
        ...r,
        renterId: r.renterId.toString(),
        hostelId: r.hostelId.toString()
      }));
    }

    isGroupBusyInDate(
      data = {
        hostelIds: [String],
        groupIds: [String],
        datets: Number
      }
    ) {
      const { hostelIds, groupIds, datets } = data;

      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              hostelId: {
                $in: hostelIds
              },
              'rooms.groupId': {
                $in: groupIds
              },
              fromts: { $lte: datets },
              tots: { $gte: datets }
            }
          },
          {
            $project: {
              'rooms.groupId': 1,
              // 'rooms.roomName': 1,
              'rooms.totalReservedCount': 1
            }
          },
          { $unwind: '$rooms' },
          {
            $match: {
              'rooms.groupId': {
                $in: groupIds
              }
            }
          },
          {
            $group: {
              _id: '$rooms.groupId',
              // name: { $first: '$rooms.roomName' },
              totalReservedCount: { $sum: '$rooms.totalReservedCount' }
            }
          }
        ]
      });
    }

    getReservationDetailsForHostelsByDateRangeAgg(
      data = {
        hostelsId: String,
        startDatets: Number,
        endDatets: Number
      }
    ) {
      const { hostelsId, startDatets, endDatets } = data;

      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              hostelId: { $in: hostelsId },
              $or: [
                {
                  fromts: { $lte: startDatets },
                  tots: { $gte: startDatets }
                },
                {
                  fromts: { $lte: endDatets },
                  tots: { $gte: endDatets }
                },
                {
                  fromts: { $gte: startDatets },
                  tots: { $lte: endDatets }
                }
              ]
            }
          },
          {
            $project: {
              'rooms.groupId': 1,
              'rooms.roomType': 1,
              'rooms.totalReservedCount': 1,
              hostelId: 1
            }
          },
          { $unwind: '$rooms' },
          {
            $group: {
              _id: {
                hostelId: '$hostelId',
                groupId: '$rooms.groupId'
              },
              roomType: { $first: '$rooms.roomType' },
              totalReservedCount: { $max: '$rooms.totalReservedCount' }
            }
          },
          {
            $project: {
              hostelId: '$_id.hostelId',
              groupId: '$_id.groupId',
              roomType: '$roomType',
              totalReservedCount: 1
            }
          },
          {
            $group: {
              _id: {
                hostelId: '$hostelId'
              },
              rooms: {
                $push: {
                  groupId: '$groupId',
                  roomType: '$roomType',
                  totalReservedCount: '$totalReservedCount'
                }
              }
            }
          },
          {
            $project: {
              hostelId: '$_id.hostelId',
              rooms: 1,
              _id: 0
            }
          }
        ]
      });
    }
  }
  return new HostelReservationModel(HostelReservationSchema);
};
