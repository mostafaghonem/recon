const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

module.exports = () => {
  return new Schema(
    {
      country: {
        type: ObjectId,
        ref: 'Constant'
      },
      travelDate: {
        type: Date,
        default: Date.now()
      },
      comebackDate: {
        type: Date,
        default: Date.now()
      },
      travelType: {
        type: ObjectId,
        ref: 'Constant'
      },
      confirmationNumber: {
        type: String
      },
      confirmationDirection: {
        type: String
      },
      confirmationDate: {
        type: Date,
        default: Date.now()
      },
      confirmationComebackDate: {
        type: Date,
        default: Date.now()
      },
      confirmationComebackNumber: {
        type: String
      }
    },
    { _id: false }
  );
};
