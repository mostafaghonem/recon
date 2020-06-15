const scheme = require('../scheme');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class OfficeModel extends GenericModel {
    // constructor(DbAccess = scheme) {
    //   super(DbAccess);
    // }

    checkExistenceBy(data = { _id: String }) {
      const orOp = Object.keys(data)
        .filter(k => data[k])
        .map(k => ({ [k]: data[k] }));

      return this.exists({ filter: { $or: orOp } });
    }
  }
  return new OfficeModel(scheme);
};
