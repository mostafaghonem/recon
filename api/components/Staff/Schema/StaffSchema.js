const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

module.exports = ({
  divSchema,
  influenceSchema,
  requestStatus,
  pendingStatus,
  recruitmentAreas,
  governates,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  treatments,
  ranks
}) => {
  const Staff = new Schema(
    {
      userId: {
        type: String,
        ref: 'User'
      },
      militaryId: {
        type: String,
        index: true,
        unique: true,
        minlength: 13,
        maxlength: 13
      },
      recordId: {
        type: String,
        index: true,
        unique: true
      },
      nationalId: {
        type: String,
        minlength: 14,
        maxlength: 14
      },
      name: {
        firstName: String,
        middleName: String,
        lastName: String,
        familyName: String
      },
      fullName: {
        type: String,
        required: true
      },
      recruitmentArea: {
        type: String,
        enum: recruitmentAreas.map(o => o.value)
      },
      tripleNumber: new Schema(
        {
          year: {
            type: Number
          },
          value: {
            type: String
          }
        },
        {
          _id: false
        }
      ),
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
        type: String,
        enum: forcesList.map(o => o.value)
      },
      army: {
        type: String,
        enum: armyList.map(o => o.value)
      },
      birthDate: {
        type: Date
      },
      joinDate: {
        type: Date,
        required: true
      },
      releaseDate: {
        type: Date
      },
      recruitmentLevel: {
        type: String,
        enum: recruitmentLevels.map(o => o.value)
      },
      educationRank: {
        type: String,
        enum: educationRanks.map(o => o.value)
      },
      rank: {
        type: String,
        enum: ranks.map(o => o.value),
        default: 'staff'
      },
      influences: [influenceSchema],
      unit: {
        type: divSchema
      },
      units: [divSchema],
      situation: {
        type: String,
        default: situations[0].value,
        enum: situations.map(o => o.value)
      },
      treatment: {
        type: String,
        default: treatments[0].value,
        enum: treatments.map(o => o.value)
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

  Staff.path('address').required(true);
  Staff.index({ militaryId: 1 }, { required: true, unique: true });
  Staff.plugin(mongoosePaginate);
  return mongoose.model('Staff', Staff);
};
