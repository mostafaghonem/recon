const mongoose = require('mongoose');

const { Schema } = mongoose;

const Example = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 200,
      trim: true,
      unique: true,
      required: true
    },
    description: {
      type: String,
      minlength: 2,
      maxlength: 200,
      trim: true,
      required: true
    },
    votesUp: {
      type: Number,
      min: 0,
      default: 0
    },
    votesDown: {
      type: Number,
      min: 0,
      default: 0
    },
    isArchived: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    autoIndex: true
  }
);

module.exports = mongoose.model('Example', Example);
