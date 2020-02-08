/**
 
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

module.exports = (/* but your inject here */) => {
  const acceptRequestFromAdmin = async () => {};
  // this one should be external ----------------one---------------
  const acceptRequestFromOwner = async (/* unitId, from, to */) => {};
  const refuseActionFromOwner = async (/* renterId */) => {};
  const renterPayRequest = async (/* unitId */) => {};

  return {
    acceptRequestFromAdmin,
    acceptRequestFromOwner,
    refuseActionFromOwner,
    renterPayRequest
  };
};
