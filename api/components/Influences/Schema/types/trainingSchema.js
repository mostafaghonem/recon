const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

module.exports = () => {
  return new Schema(
    {
      courseName: {
        type: String
      },
      courseType: {
        type: ObjectId,
        ref: 'Constant'
      },
      courseNumber: {
        type: String
      },
      courseCollege: {
        type: ObjectId,
        ref: 'Constant'
      },
      from: {
        type: Date,
        default: Date.now()
      },
      to: {
        type: Date
      },
      orderNumber: {
        type: String
      },
      orderDate: {
        type: Date,
        default: Date.now()
      },
      score: {
        type: String
      }
    },
    { _id: false }
  );
};
