const uuid = require('uuid').v4;
const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeReserveUC = require('./ReserveUC');
const makeAdminViewUC = require('./AdminViewUC');

module.exports.ReserveUC = makeReserveUC({
  ApplicationError,
  logger,
  redis: redisClient,
  uuid,
  checkAndCalculateReservationCost: async ({
    renterId,
    hostelId,
    fromts,
    tots,
    totalReservedCount,
    rooms
  }) => {
    logger.info(
      `checkAndCalculateReservationCost called with args ${JSON.stringify(
        {
          renterId,
          hostelId,
          fromts,
          tots,
          totalReservedCount,
          rooms
        },
        undefined,
        4
      )}`
    );
    return Promise.resolve(Math.floor(Math.random() * 2000 + 500));
  },
  processPayment: async ({ paymentId, shouldPay, timeLimit, payload }) => {
    logger.info(
      `Some user should pay ${shouldPay} for this paymentId ${paymentId} within ${timeLimit} ms \n with payload ${JSON.stringify(
        payload,
        undefined,
        5
      )}`
    );
    return Promise.resolve(true);
  }
});

module.exports.AdminViewUC = makeAdminViewUC({
  ApplicationError,
  logger,
  // ! if no phone is provided there will be an array of ids instead to return data (the priority is for phone search)
  getRenterDataWithPhoneSearch: async (phoneToSearch, ids = []) => {
    logger.info(
      `geting RenterDataWithPhone ${phoneToSearch} - ${JSON.stringify(
        ids,
        undefined,
        4
      )}`
    );
    return Promise.resolve({
      [`${ids[0] || '5e231b3cbdaaa90013330ed7'}`]: {
        renterId: ids[0] || '5e231b3cbdaaa90013330ed7',
        phone: '01550178854',
        fullName: 'Mohamed Gamal',
        address: "Inanya 20'th street",
        government: 'Damietta',
        image: 'some url to valid image',
        birthDateTs: new Date().getTime(),
        gender: 'male',
        job: { type: 'Student', description: 'First grade of CS' }
      }
    });
  },
  getHostelsDataFromIds: async idArray => {
    logger.info(
      `geting HostelsDataFromIds ${JSON.stringify(idArray, undefined, 4)}`
    );
    return Promise.resolve({
      [`${idArray[0]}`]: {
        hostelId: idArray[0],
        name: 'Honey moon Hotel',
        image: 'valid image url',
        rate: 'Number from 1 to 5',
        rateCount: 'Number of distinct user rates',
        phone: '01550178854',
        address: {
          government: 'Damietta',
          street: 'String',
          nearTo: 'String',
          highlight: 'String',
          houseNumber: 'String',
          apartmentNumber: 'String',
          floorNumber: 'String'
        }
      },
      [`${idArray[1]}`]: {
        hostelId: idArray[1],
        name: `Honey moon 2'nd Hotel`,
        image: 'valid image url',
        rate: 'Number from 1 to 5',
        rateCount: 'Number of distinct user rates',
        phone: '01550178854',
        address: {
          government: 'Damietta',
          street: 'String',
          nearTo: 'String',
          highlight: 'String',
          houseNumber: 'String',
          apartmentNumber: 'String',
          floorNumber: 'String'
        }
      }
    });
  }
});
