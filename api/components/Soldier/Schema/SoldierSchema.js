const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const divSchema = new Schema(
  {
    unitId: {
      type: String,
      ref: 'Division',
      required: true
    },
    divisionId: {
      type: String,
      ref: 'Division'
    },
    joinDate: {
      type: Date
    },
    releaseDate: {
      type: Date
    }
  },
  {
    _id: false,
    timestamps: true
  }
);
module.exports = ({
  requestStatus,
  pendingStatus,
  recruitmentAreas,
  governates,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  treatments
}) => {
  const Soldier = new Schema(
    {
      militaryId: {
        type: String,
        index: true,
        unique: true
      },
      recordId: {
        type: Number,
        index: true,
        unique: true
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
      influences: [],
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

  Soldier.path('address').required(true);
  Soldier.index({ militaryId: 1 }, { required: true, unique: true });
  Soldier.plugin(mongoosePaginate);
  return mongoose.model('Soldier', Soldier);
};
