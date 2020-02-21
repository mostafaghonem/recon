const mongoose = require('mongoose');

const { Schema } = mongoose;

const { ObjectId } = mongoose.Types;

module.exports = ({ requestStatus }) => {
  const identityRequest = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      //TODO ask if it is important or not
      // admin: {
      //   type: ObjectId,
      //   ref: null
      // },
      identificationImages: [
        {
          type: String,
          require: true
        }
      ],
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

  return mongoose.model('identityRequests', identityRequest);
};
