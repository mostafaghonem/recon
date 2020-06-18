const logger = require('../../../startup/logger');

const getRenterDataWithIds = async (ids = []) => {
  logger.info(
    `geting RenterDataWithIds - ${JSON.stringify(ids, undefined, 4)}`
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
};

const getRenterDataWithPhoneSearch = async phoneToSearch => {
  logger.info(`geting RenterDataWithPhone ${phoneToSearch}`);
  return Promise.resolve({
    [`${'5e231b3cbdaaa90013330ed7'}`]: {
      renterId: '5e231b3cbdaaa90013330ed7',
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
};

const getOfficesDataFromIds = async idArray => {
  logger.info(
    `geting OfficesDataFromIds ${JSON.stringify(idArray, undefined, 4)}`
  );
  return Promise.resolve({
    [`${idArray[0]}`]: {
      officeId: idArray[0],
      name: 'Honey moon Office',
      image: 'valid image url',
      rate: 3.5,
      rateCount: 324,
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
      officeId: idArray[1],
      name: `Honey moon 2'nd Office`,
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
};

const checkAndCalculateReservationCost = async ({
  officeId,
  fromts,
  tots,
  offices
}) => {
  logger.info(
    `checkAndCalculateReservationCost called with args ${JSON.stringify(
      {
        officeId,
        fromts,
        tots,
        offices
      },
      undefined,
      4
    )}`
  );
  return Promise.resolve(Math.floor(Math.random() * 2000 + 500));
};

const processPayment = async ({ paymentId, shouldPay, timeLimit, payload }) => {
  logger.info(
    `Some user should pay ${shouldPay} for this paymentId ${paymentId} within ${timeLimit} ms \n with payload ${JSON.stringify(
      payload,
      undefined,
      5
    )}`
  );
  return Promise.resolve(true);
};

module.exports = {
  checkAndCalculateReservationCost,
  processPayment,
  getOfficesDataFromIds,
  getRenterDataWithPhoneSearch,
  getRenterDataWithIds
};