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
  requestStatus,
  pendingStatus
}) => {
  const hostel = new Schema(
    {
      name: {
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
      },
      phone: {
        type: String,
        unique: true,
        trim: true,
        required: true
      },
      email: {
        type: String,
        unique: true,
        trim: true,
        required: true
      },
      managerEmail: {
        type: String,
        unique: true,
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
      userId: {
        type: ObjectId,
        ref: 'User'
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
              type: String,
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
            default: roomsTypes
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
            type: new Schema(
              {
                price: {
                  type: Number,
                  required: true
                },
                per: {
                  type: String,
                  required: true,
                  enum: pricePer
                }
              },
              {
                _id: false
              }
            ),
            required: true
          },
          availability: [
            new Schema({
              totalNumber: {
                type: Number,
                required: true
              },
              busyFrom: {
                type: Date,
                required: true
              },
              busyTo: {
                type: Date,
                required: true
              }
            })
          ],
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
      totalRevenue: {
        type: Number,
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

  return mongoose.model('Hostel', hostel);
};
