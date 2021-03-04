const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

module.exports = () => {
  return new Schema(
    {
      noticeNumber: {
        type: String,
        required: true
      },
      noticeDate: {
        type: Date,
        default: Date.now()
      },
      noticeArrivalDate: {
        type: Date,
        default: Date.now()
      },
      abscenseDate: {
        type: Date,
        default: Date.now()
      },
      removalDate: {
        type: Date,
        default: Date.now()
      },
      comebackDate: {
        type: Date,
        default: Date.now()
      },
      fleeInfluenceId: {
        type: ObjectId,
        ref: 'Influence'
      }
    },
    { _id: false }
  );
};
