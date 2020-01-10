const scheme = require('../scheme');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UserModel extends GenericModel {
    // constructor(DbAccess = scheme) {
    //   super(DbAccess);
    // }

    checkExistenceBy(data = { email: String, phone: String }) {
      const orOp = Object.keys(data)
        .filter(k => data[k])
        .map(k => ({ [k]: data[k] }));

      return this.exists({ filter: { $or: orOp } });
    }

    getUserByPhone(query = {}, select = '') {
      return this.getOne({ query, select });
    }

    anotherSpecificModelFunc() {
      return this.getAggregate([
        {
          complexAggs: ''
        }
      ]);
    }
  }
  return new UserModel(scheme);
};
