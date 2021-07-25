const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

module.exports = () => {
  return new Schema(
    {
      title: {
        type: ObjectId,
        ref: 'Constant'
      },
      orderMaker: {
        type: ObjectId,
        ref: 'Constant'
      },
      startDate: {
        type: Date,
        default: Date.now()
      },
      period: {
        type: Number
      },
      periodType: {
        type: String,
        enum: ['day', 'month', 'year']
      },
      orderNumber: {
        type: String,
        required: true
      },
      orderDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        default: Date.now()
      },
      abscenseDate: {
        type: Date,
        default: Date.now()
      },
      comebackDate: {
        type: Date,
        default: Date.now()
      },
      crimeMajorLaw: {
        type: ObjectId,
        ref: 'Constant'
      },
      dishonored: {
        type: Boolean,
        default: false
      },
      statement: {
        type: String
      },
      sentenceCourt: {
        type: String,
        default: 'محكمة عسكرية'
      },
      courtPlace: {
        type: String
      },
      caseNumber: {
        type: String
      },
      caseDate: {
        type: Date,
        default: Date.now()
      },
      fine: {
        type: String
      },
      finePaid: {
        type: Boolean,
        default: false
      },
      answerDirection: {
        type: String
      },
      answerDate: {
        type: String
      }
    },
    { _id: false }
  );
};
