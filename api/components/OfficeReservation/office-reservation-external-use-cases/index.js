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

const makeGetReservedOfficeCountByOffice = require('./get-reserved-office-count-by-offices');
const makeIsGroupBusyInDateTs = require('./is-group-busy-in-this-date');
const makeCompletePayment = require('./complete-payment');
const makeGetReservationCostById = require('./get-reservation-cost-by-id');
// const { updateOfficeBookingData } = require('./__mocks');

/**
 *  ! This will return the officeId containing array of offices each one has a groupId with the max reservation count in it in the specified period
  [
    {
      "offices" : [
        {
          "groupId" : ObjectId("507f1f77bcf86cd799439014"),
          "officeType" : "SINGLE",
          "totalReservedCount" : 7
        }
      ],
      "officeId" : ObjectId("507f1f77bcf86cd799449011")
    }
  ]
 */
const getReservedOfficeCountByOffices = makeGetReservedOfficeCountByOffice({});

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

const completeOfficePayment = makeCompletePayment({
  logger,
  redis: redisClient,
  publisher: redis
});

const getReservationCostById = makeGetReservationCostById({
  redis: redisClient
});

// const isGroupBusyInDateTs = (officeIds, groupIds, datets) => {
//   return 'Is this group is busy within this date? if yes, how many offices is busy';
// };

const OfficeReservationExternals = Object.freeze({
  getReservedOfficeCountByOffices,
  isGroupBusyInDateTs,
  getReservationCostById,
  completeOfficePayment
});

module.exports = OfficeReservationExternals;
