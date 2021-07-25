const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = ({ ranks }) => {
  return new Schema(
    {
      higherRank: {
        type: String,
        enum: ranks.map(o => o.value)
      },
      lowerRank: {
        type: String,
        enum: ranks.map(o => o.value)
      },
      date: {
        type: Date,
        default: Date.now()
      },
      orderNumber: {
        type: String,
        required: true
      },
      orderDate: {
        type: Date,
        required: true
      }
    },
    { _id: false }
  );
};
