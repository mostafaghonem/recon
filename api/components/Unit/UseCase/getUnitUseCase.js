/* 

 4 - getting request with filter like:
        : get all request to admin with pagination and search
        : get all request to renter renter id with pagination and search
        : get all request to unit it self with pagination and search
 ****** external service that return number if request in each unit

*/
module.exports = (/* but your inject here */) => {
  const returnAllRequestForAdmin = async () => { };
  // this one should be external ----------------one---------------
  const returnNumberOfRequestForAdmin = async (/* unitId */) => { };
  const returnRequestForRenter = async (/* renterId */) => { };
  const getAllRequestForUnit = async (/* unitId */) => { };

  return {
    returnAllRequestForAdmin,
    returnNumberOfRequestForAdmin,
    returnRequestForRenter,
    getAllRequestForUnit
  };
};
