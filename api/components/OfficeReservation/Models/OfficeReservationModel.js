const OfficeReservationSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

const getQueryFromStatus = status => {
  let query;
  const nowts = new Date().setHours(0, 0, 0, 0);

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
  class OfficeReservationModel extends GenericModel {
    async getReservationsWithStatus(status, skip, limit) {
      const query = getQueryFromStatus(status);
      return this.getManyWithMapping(skip, limit, query);
    }

    async getOfficeReservationsWithStatus(officeId, status, skip, limit) {
      let query = getQueryFromStatus(status);
      query = { ...query, officeId };
      return this.getManyWithMapping(skip, limit, query);
    }

    getReservationsWithStatusForUsers(users, status, skip, limit) {
      let query = getQueryFromStatus(status);
      query = { ...query, renterId: { $in: users } };
      return this.getManyWithMapping(skip, limit, query);
    }

    getOfficeReservationsWithStatusForUsers(
      officeId,
      users,
      status,
      skip,
      limit
    ) {
      let query = getQueryFromStatus(status);
      query = { ...query, renterId: { $in: users }, officeId };
      return this.getManyWithMapping(skip, limit, query);
    }

    async getManyWithMapping(skip, limit, query) {
      // ! .lean() doesn't work with select
      const dbRet = await this.getMany({ skip, limit, query });
      return dbRet.map(r => ({
        ...r,
        renterId: r.renterId.toString(),
        officeId: r.officeId.toString()
      }));
    }

    isGroupBusyInDate(
      data = {
        officeIds: [String],
        groupIds: [String],
        datets: Number
      }
    ) {
      const { officeIds, groupIds, datets } = data;

      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              officeId: {
                $in: officeIds
              },
              'offices.groupId': {
                $in: groupIds
              },
              fromts: { $lte: datets },
              tots: { $gte: datets }
            }
          },
          {
            $project: {
              'offices.groupId': 1,
              // 'offices.officeName': 1,
              'offices.totalReservedCount': 1
            }
          },
          { $unwind: '$offices' },
          {
            $match: {
              'offices.groupId': {
                $in: groupIds
              }
            }
          },
          {
            $group: {
              _id: '$offices.groupId',
              // name: { $first: '$offices.officeName' },
              totalReservedCount: { $sum: '$offices.totalReservedCount' }
            }
          }
        ]
      });
    }

    getReservationDetailsForOfficesByDateRangeAgg(
      data = {
        officesId: String,
        startDatets: Number,
        endDatets: Number
      }
    ) {
      const { officesId, startDatets, endDatets } = data;

      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              officeId: { $in: officesId },
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
              'offices.groupId': 1,
              'offices.officeType': 1,
              'offices.totalReservedCount': 1,
              officeId: 1
            }
          },
          { $unwind: '$offices' },
          {
            $group: {
              _id: {
                officeId: '$officeId',
                groupId: '$offices.groupId'
              },
              officeType: { $first: '$offices.officeType' },
              totalReservedCount: { $max: '$offices.totalReservedCount' }
            }
          },
          {
            $project: {
              officeId: '$_id.officeId',
              groupId: '$_id.groupId',
              officeType: '$officeType',
              totalReservedCount: 1
            }
          },
          {
            $group: {
              _id: {
                officeId: '$officeId'
              },
              offices: {
                $push: {
                  groupId: '$groupId',
                  officeType: '$officeType',
                  totalReservedCount: '$totalReservedCount'
                }
              }
            }
          },
          {
            $project: {
              officeId: '$_id.officeId',
              offices: 1,
              _id: 0
            }
          }
        ]
      });
    }
  }
  return new OfficeReservationModel(OfficeReservationSchema);
};
