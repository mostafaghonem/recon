const mongoose = require('mongoose');

const { Schema } = mongoose;

const { ObjectId } = mongoose.Types;

module.exports = ({ requestStatus }) => {
  const uploadedHostelRequest = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      hostelId: {
        type: ObjectId,
        ref: 'Hostel'
      },
      status: {
        type: String,
        default: requestStatus.PENDING,
        enum: requestStatus
      },
      note: {
        type: String,
        default: ''
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

  return mongoose.model('uploadedHostelsRequests', uploadedHostelRequest);
};