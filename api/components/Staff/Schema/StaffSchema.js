const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

module.exports = ({
  divSchema,
  influenceSchema,
  ranks,
  requestStatus,
  governates,
  armyList,
  forcesList,
  categoriesList,
  medicalSituations,
  pendingStatus
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
      individualId: {
        type: String
      },
      batchId: {
        type: String
      },
      nationalId: {
        type: String,
        minlength: 14,
        maxlength: 14
      },
      education: {
        type: String
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
      category: {
        type: String,
        enum: categoriesList.map(o => o.value)
      },
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
      rankingDate: {
        type: Date,
        required: true
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
      medicalSituation: {
        type: String,
        default: medicalSituations[0].value,
        enum: medicalSituations.map(o => o.value)
      },
      phoneNumber: {
        type: String
      },
      medicalCard: {
        type: Boolean
      },
      religion: {
        type: String,
        default: 'مسلم'
      },
      weight: {
        type: String
      },
      height: {
        type: String
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
