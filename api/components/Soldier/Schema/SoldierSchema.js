const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const cities = require('../../../shared/constants/cities');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({
  rentersType,
  soldierTypes,
  PricePer,
  requestStatus,
  pendingStatus,
  currencies,
  soldierServices
}) => {
  const Soldier = new Schema(
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
      rentersType: {
        type: String,
        enum: rentersType,
        required: true
      },
      numberOfPeople: {
        type: Number,
        required: true
      },
      numberOfRooms: {
        type: Number,
        required: true
      },
      hasFurniture: {
        type: Boolean,
        default: false
      },
      availableCountNow: {
        type: Number,
        default: 1
      },
      pricePerPerson: {
        type: Number,
        required: true
      },
      dailyOrMonthly: {
        type: String,
        enum: PricePer
      },
      highlight: {
        type: String
      },
      availability: [
        {
          from: {
            type: Date
          },
          to: {
            type: Date
          }
        }
      ],
      address: new Schema(
        {
          governate: {
            type: String,
            enum: cities
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
      services: [
        {
          type: String,
          enum: soldierServices
        }
      ],
      conditions: [
        {
          type: String,
          min: 2,
          max: 255
        }
      ],
      gallery: [
        {
          type: String
        }
      ],
      rates: [
        new Schema(
          {
            userId: {
              type: ObjectId,
              ref: 'User'
            },
            rate: {
              type: Number,
              default: 0
            }
          },
          { _id: false }
        )
      ],
      rate: {
        type: Number,
        default: 0
      },
      totalRate: {
        type: Number,
        default: 0
      },
      totalUsersRated: {
        type: Number,
        default: 0
      },
      status: {
        type: String,
        enum: requestStatus,
        default: pendingStatus
      },
      note: {
        type: String
      },
      totalOnlineBooking: {
        type: Number,
        default: 0
      },
      totalRevenue: {
        type: Number,
        default: 0
      },
      isEditing: {
        type: Boolean,
        default: false
      },
      isFull: {
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
  Soldier.plugin(mongoosePaginate);
  return mongoose.model('Soldier', Soldier);
};
