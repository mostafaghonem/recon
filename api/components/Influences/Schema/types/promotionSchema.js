const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = ({ ranks }) => {
  return new Schema(
    {
      lowerRank: {
        type: String,
        enum: ranks.map(o => o.value)
      },
      higherRank: {
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
      },
      expetional: {
        type: Boolean,
        default: true
      }
    },
    { _id: false }
  );
};
