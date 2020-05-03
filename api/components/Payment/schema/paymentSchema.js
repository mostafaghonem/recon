const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = () => {
  const Payment = new Schema(
    {
      orderId: {
        type: String,
        required: true
      },
      hostelReservationId: {
        type: ObjectId,
        ref: 'HostelReservation'
      },
      unitReservationId: {
        type: ObjectId,
        ref: 'unitReservation'
      },
      reservationType: {
        type: String,
        default: 'hostel'
      },
      paymentId: {
        type: String
      },
      reservation: {
        renterId: {
          type: ObjectId,
          ref: 'User'
        },
        hostelId: {
          type: ObjectId,
          ref: 'Hostel'
        },
        unitId: {
          type: ObjectId,
          ref: 'Unit'
        },
        fromTs: {
          type: Number
        },
        toTs: {
          type: Number
        },
        current: {
          type: Number
        },
        total: {
          type: Number
        },
        extras: {
          type: Number
        },
        totalAfterExtras: {
          type: Number
        },
        totalReservedCount: {
          type: Number,
          default: 1
        },
        reserveDateTs: {
          type: Number
        },
        rooms: {
          type: Schema.Types.Mixed
        }
      },
      fees: {
        houseOwner: {
          type: Number,
          min: 0,
          max: 100,
          default: 15
        },
        renter: {
          type: Number,
          min: 0,
          max: 100,
          default: 0
        },
        voucher: {
          type: Number,
          min: 0,
          max: 100,
          default: 0
        }
      },
      method: {
        type: String,
        default: 'credit'
      },
      timeLimit: {
        type: Number
      },
      refund_status: new Schema(
        {
          refunded: {
            type: Boolean,
            default: false
          }
        },
        {
          _id: false,
          timestamps: true
        }
      )
    },
    {
      timestamps: true,
      autoIndex: true
    }
  );

  return mongoose.model('paymentOrder', Payment);
};
