const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

module.exports = ({ eventsTypes, objectsTypes }) => {
  const Event = new Schema({
    type: {
      type: String,
      enum: eventsTypes,
      index: true
    },
    userId: {
      type: Object
    },
    username: {
      type: String
    },
    message: {
      type: String
    },
    objectId: {
      type: String
    },
    objectName: {
      type: String
    },
    objectType: {
      type: String,
      enum: objectsTypes
    },
    timestamp: {
      type: String
    },
    eventCounter: {
      type: Number
    },
    targets: {
      type: Schema.Types.Map,
      of: new Schema(
        {
          userId: {
            type: ObjectId,
            ref: 'User'
          },
          seen: {
            type: Boolean,
            default: false
          },
          interacted: {
            type: Boolean,
            default: false
          }
        },
        { _id: false }
      )
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  });
  return mongoose.model('Event', Event);
};
