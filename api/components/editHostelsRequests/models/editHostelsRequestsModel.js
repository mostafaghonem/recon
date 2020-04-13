const scheme = require('../scheme');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class EditHostelsRequestsModel extends GenericModel {
    checkExistenceBy(data = { _id: String }) {
      return this.exists({ filter: data });
    }
  }
  return new EditHostelsRequestsModel(scheme);
};
