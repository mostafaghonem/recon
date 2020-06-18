const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({ requestStates }) => {
  const User = new Schema(
    {
      renter: {
        type: ObjectId,
        required: true
      },
      owner: {
        type: ObjectId,
        required: true
      },
      unit: {
        type: ObjectId,
        required: true
      },
      from: {
        type: Number,
        required: true
      },
      to: {
        type: Number,
        required: true
      },
      cost: {
        type: Number,
        required: true
      },
      totalAfterExtras: {
        type: Number,
        required: true
      },
      state: {
        type: String,
        enum: Object.values(requestStates),
        default: requestStates.SEND
      },
      note: {
        type: String
      },
      pending: {
        type: Boolean,
        default: false
      }
    },
    {
      timestamps: true,
      autoIndex: true
    }
  );

  return mongoose.model('unitReservation', User);
};
