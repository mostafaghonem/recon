const mongoose = require('mongoose');

const { Schema } = mongoose;

const { ObjectId } = mongoose.Types;

module.exports = ({ requestStatus }) => {
  const uploadedOfficeRequest = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      officeId: {
        type: ObjectId,
        ref: 'Office'
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

  return mongoose.model('uploadedOfficesRequests', uploadedOfficeRequest);
};
