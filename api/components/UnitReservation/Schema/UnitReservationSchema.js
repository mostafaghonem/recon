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
      state: {
        type: String,
        enum: requestStates
      },
      note: {
        type: String,
        default: 'there is an request accept in your time before'
      }
    },
    {
      timestamps: true,
      autoIndex: true
    }
  );

  return mongoose.model('User', User);
};
