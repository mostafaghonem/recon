const HostelReservationSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class HostelReservationModel extends GenericModel {
    getReservationForHostelByDateRange(
      data = {
        hostelId: String,
        startDatets: Number,
        endDatets: Number
      }
    ) {
      const { hostelId, startDatets, endDatets } = data;

      return this.getOne({
        query: {
          hostelId,
          $or: [
            {
              fromts: { $gte: startDatets },
              tots: { $lte: startDatets }
            },
            {
              fromts: { $gte: endDatets },
              tots: { $lte: endDatets }
            }
          ]
        },
        select: {
          'rooms.roomId': 1,
          'rooms.roomType': 1,
          hostelId: 1,
          fromts: 1,
          tots: 1
        }
      });
    }

    getReservationForHostelByDateRangeAgg(
      data = {
        hostelId: String,
        startDatets: Number,
        endDatets: Number
      }
    ) {
      const { hostelId, startDatets, endDatets } = data;

      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              hostelId,
              $or: [
                {
                  fromts: { $gte: startDatets },
                  tots: { $lte: startDatets }
                },
                {
                  fromts: { $gte: endDatets },
                  tots: { $lte: endDatets }
                }
              ]
            }
          },
          {
            $project: {
              'rooms.roomId': 1,
              hostelId: 1,
              fromts: 1,
              tots: 1
            }
          },
          { $unwind: '$rooms' },
          {
            $group: {
              _id: '$hostelId',
              rooms: { $addToSet: '$rooms.roomId' }
            }
          }
        ]
      });
    }

    getReservationCountForHostelsByDateRangeAgg(
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
                  fromts: { $gte: startDatets },
                  tots: { $lte: startDatets }
                },
                {
                  fromts: { $gte: endDatets },
                  tots: { $lte: endDatets }
                }
              ]
            }
          },
          {
            $project: {
              'rooms.roomId': 1,
              hostelId: 1,
              fromts: 1,
              tots: 1
            }
          },
          { $unwind: '$rooms' },
          {
            $group: {
              _id: '$hostelId',
              rooms: { $addToSet: '$rooms.roomId' }
            }
          },
          {
            $project: {
              _id: 1,
              reservedRoomCount: { $size: '$rooms' }
            }
          }
        ]
      });
    }
  }
  return new HostelReservationModel(HostelReservationSchema);
};
