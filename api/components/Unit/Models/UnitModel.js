const unitSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UnitModel extends GenericModel {
    async checkAddingNewUnit(unitId, comingOne) {
      const result = await this.getOne({
        query: {
          unit: unitId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to }
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }
  }
  return new UnitModel(unitSchema);
};
