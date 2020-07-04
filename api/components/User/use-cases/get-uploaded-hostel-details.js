/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({
  ApplicationError,
  logger,
  getHouseOwnerHostel,
  checkHostelReservationRequests
}) => async (userId, id) => {
  const hostel = (await getHouseOwnerHostel(userId, id)) || {};
  const fromts = new Date().getTime();
  const checkReservationRequests = await checkHostelReservationRequests(
    id,
    fromts
  );
  if (checkReservationRequests) hostel.canDoActions = false;
  else hostel.canDoActions = true;

  return hostel;
};
