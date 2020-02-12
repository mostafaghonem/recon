const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

module.exports = ({
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices,
  toiletTypes,
  roomsTypes,
  pricePer,
  currencies,
  requestStatus,
  pendingStatus
}) => {
  const hostel = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      name: {
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
      },
      phone: {
        type: String,
        trim: true,
        required: true
      },
      email: {
        type: String,
        trim: true,
        required: true
      },
      managerEmail: {
        type: String,
        trim: true,
        required: true
      },
      description: {
        type: String,
        required: true,
        min: 5,
        max: 500
      },
      image: {
        type: String,
        required: true
      },
      currency: {
        type: String,
        enum: currencies,
        required: true
      },
      address: {
        type: new Schema(
          {
            government: {
              type: String,
              required: true
            },
            street: {
              type: String,
              required: true
            },
            nearTo: {
              type: String,
              required: true
            },
            highlight: {
              type: String,
              required: true
            },
            houseNumber: {
              type: Number,
              required: true
            },
            apartmentNumber: {
              type: Number,
              required: true
            },
            floorNumber: {
              type: Number,
              required: true
            }
          },
          {
            _id: false
          }
        ),
        required: true
      },
      freeServices: [
        {
          type: String,
          required: true,
          enum: freeServices
        }
      ],
      generalServices: [
        {
          type: String,
          required: true,
          enum: generalServices
        }
      ],
      hostelServices: [
        {
          type: String,
          required: true,
          enum: hostelServices
        }
      ],
      entertainmentServices: [
        {
          type: String,
          required: true,
          enum: entertainmentServices
        }
      ],
      foodServices: [
        {
          type: String,
          required: true,
          enum: foodServices
        }
      ],
      rooms: [
        // @description This to use tag generated _id for navigation
        new Schema({
          name: {
            type: String,
            required: true
          },
          images: [String],
          numberOfPersons: {
            type: Number,
            required: true
          },
          toilet: {
            type: String,
            required: true,
            enum: toiletTypes
          },
          Type: {
            type: String,
            required: true,
            enum: roomsTypes
          },
          totalRooms: {
            type: Number,
            required: true
          },
          floorNumber: {
            type: Number,
            required: true
          },
          totalAvailableRooms: {
            type: Number,
            required: true
          },
          pricePerPerson: {
            type: Number,
            required: true
          },
          pricePer: {
            type: String,
            required: true,
            enum: pricePer
          },
          isArchived: {
            type: Boolean,
            default: false
          }
        })
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
        type: String,
        default: ''
      },
      totalOnlineBooking: {
        type: Number,
        default: 0
      },
      totalRevenue: {
        type: Number,
        default: 0
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

  return mongoose.model('Hostel', hostel);
};
