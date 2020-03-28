const eventSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class EventModel extends GenericModel {
    async checkAddingNewEvent(eventId, timestamp) {
      const result = await this.getOne({
        query: {
          event: eventId,
          timestamp
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }

    async getUnseen(userId, lastId, limit) {
      const query = {
        'targets.userId': userId,
        'targets.seen': false,
        _id: {
          $gt: lastId
        }
      };

      const sort = { createdAt: 1 };
      const events = await this.getMany({
        query,
        sort,
        limit
      });

      const hasNext =
        events && events.length
          ? await this.checkHasNext(query, events[events.length - 1]._id)
          : false;
      return { hasNext, events };
    }

    async checkHasNext(query = {}, lastId) {
      // eslint-disable-next-line no-param-reassign
      query._id = {
        $gt: lastId
      };

      const response = await this.getOne({
        query
      });
      return response;
    }
  }
  return new EventModel(eventSchema);
};
