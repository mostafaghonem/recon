// Welcome to you in salah zoon please don't edit any part in this code :DD
// There is three main use case here
/*
    TODO
    
     
    1 - getting un-available times over single unit
        : get all request with state done or received
        : and with data larger than current data
    2 - when user select from - to reservation stamp 
        : need to cal the cost of his reservation and retrieve it to front
        ** less (need to get some data from unit schema)
    3 - adding request 
        : need to check if this request have intersect with same unit and over 
        from to with another request with state payed or received



    4 - getting request with filter like:
        : get all request to admin with pagination and search
        : get all request to renter renter id with pagination and search
        : get all request to unit it self with pagination and search


    5 - accept request from admin 
        : here we can update the request state as "acceptBYAdmin" 


    6 - accept request from owner 
        : update the request state to "acceptByOwner"
        : here we need to gel all request with intersect with this request 
        : update its state to pending 
    7 - refuse request from Owner for any reason but all before payed
        : update the request to "refuse"
        : getting all request that is pending 
        and have no intersect with accepted request and made it "send"
    8 - renter accept pay
        : update request to "PAYED"
        : get all request that intersect with this request and made it "refuse"


*/
const uuid = require('uuid').v4;
const addingUnitReservationMaker = require('./addUnitReservationUseCase');
const getUnitReservationUseCase = require('./getUnitReservationUseCase');
const actionOverUnitReservationUseCaseMaker = require('./actionOverUnitReservationUseCase');
const { processPayment } = require('../../Payment/external-use-case');
const { createEvent } = require('../../EventManager/ExternalUseCases');
const { getUsersByIds } = require('../../User/user-external-use-cases');

const {
  getUnit,
  calculateReservationCost
} = require('../../Unit/UnitExternalUseCases');

module.exports = {
  addUnitReservationUseCase: addingUnitReservationMaker({
    calculateCost: calculateReservationCost,
    getUnitDetails: getUnit,
    createEvent,
    getUsersByIds
  }),
  getUnitReservationUseCase: getUnitReservationUseCase(),
  reservationUnitAction: actionOverUnitReservationUseCaseMaker({
    getUnitDetails: getUnit,
    uuid,
    processPayment,
    createEvent,
    getUnitDetail: getUnit,
    getUsersByIds
  })
};
