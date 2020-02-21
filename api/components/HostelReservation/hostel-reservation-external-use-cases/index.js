/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const redis = require('redis');
const logger = require('../../../startup/logger');
// const { ApplicationError } = require('../../../shared/errors');
const redisClient = require('../../../shared/redis-client');

const makeGetReservedRoomCountByHotel = require('./get-reserved-room-count-by-hotel');
const makeIsGroupBusyInDateTs = require('./is-group-busy-in-this-date');
const makeCompletePayment = require('./complete-payment');
const { updateHostelBookingData } = require('./__mocks');

/**
 *  ! This will return the hostelId containing array of rooms each one has a groupId with the max reservation count in it in the specified period
  [
    {
      "rooms" : [
        {
          "groupId" : ObjectId("507f1f77bcf86cd799439014"),
          "roomType" : "SINGLE",
          "totalReservedCount" : 7
        }
      ],
      "hostelId" : ObjectId("507f1f77bcf86cd799449011")
    }
  ]
 */
const getReservedRoomCountByHotels = makeGetReservedRoomCountByHotel({});

/**
 * ! Returns an array with each groupId if he has any reservation in this date with its count of the reservations
 * 
  [
    {
      "_id" : ObjectId("507f1f77bcf86cd799439015"),
      "totalReservedCount" : 17
    }
  ]
 */
const isGroupBusyInDateTs = makeIsGroupBusyInDateTs({});

const completePayment = makeCompletePayment({
  logger,
  redis: redisClient,
  publisher: redis,
  updateHostelBookingData
});

// const isGroupBusyInDateTs = (hostelIds, groupIds, datets) => {
//   return 'Is this group is busy within this date? if yes, how many rooms is busy';
// };

const HostelReservationExternals = Object.freeze({
  getReservedRoomCountByHotels,
  isGroupBusyInDateTs,
  completePayment
});

module.exports = HostelReservationExternals;
