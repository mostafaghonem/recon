/**
 
 
   
 */
const Models = require('../Models');
const { UnitState } = require('../../../shared/constants/defaults');

module.exports = (/* but your inject here */) => {
  const acceptRequestFromAdmin = async requestId => {
    const result = await Models.updateOneById({
      id: requestId,
      update: { state: UnitState.ACCEPT_BY_ADMIN }
    });
    return { result };
  };

  return {
    acceptRequestFromAdmin
  };
};
