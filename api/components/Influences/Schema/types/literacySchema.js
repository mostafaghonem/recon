const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = ({ governates }) => {
  return new Schema(
    {
      literacyNumber: {
        type: String,
        required: true
      },
      seatNumber: {
        type: String,
        required: true
      },
      governate: {
        type: String,
        enum: governates.map(o => o.value)
      },
      graduationLevel: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now()
      },
      degree: {
        type: String
      },
      score: {
        type: Number,
        min: 0
      }
    },
    { _id: false }
  );
};
