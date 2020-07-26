const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { governates } = require('../../../shared/constants/locations');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({ requestStatus, pendingStatus }) => {
  const Division = new Schema(
    {
      militaryId: {
        type: ObjectId,
        index: true
      },
      name: {
        type: String,
        required: true
      },
      recruitmentArea: {
        type: String,
        required: true,
        ref: 'Recruitment_Area'
      },
      tripleNumber: {
        type: String,
        required: true
      },
      address: new Schema(
        {
          governate: {
            type: String,
            enum: governates.map(o => o.value)
          },
          centre: {
            type: String
          },
          village: {
            type: String
          }
        },
        {
          _id: false
        }
      ),
      force: {
        type: String
      },
      totalRate: {
        type: Number,
        default: 0
      },
      status: {
        type: String,
        enum: requestStatus,
        default: pendingStatus
      },
      isEditing: {
        type: Boolean,
        default: false
      },
      isHidden: {
        type: Boolean,
        default: false
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

  Division.path('address').required(true);
  Division.plugin(mongoosePaginate);
  return mongoose.model('Division', Division);
};
