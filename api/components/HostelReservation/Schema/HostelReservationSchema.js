const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

module.exports = (
  // eslint-disable-next-line no-empty-pattern
  {
    /* dependencies */
  }
) => {
  const model = new Schema(
    {
      renterId: {
        type: ObjectId,
        required: true
      },
      hostelId: {
        type: ObjectId,
        required: true
      },
      fromts: {
        type: Number,
        required: true
      },
      tots: {
        type: Number,
        required: true
      },

      totalPrice: {
        type: Number,
        required: true
      },

      shouldPayPrice: {
        type: Number,
        required: true
      },

      reserveDatets: {
        type: Number,
        required: true
      },

      totalReservedCount: {
        type: Number,
        required: true
      },

      rooms: {
        type: [
          new Schema(
            {
              roomId: {
                type: ObjectId,
                required: true
              },
              roomType: String,
              roomName: String,
              pricePerRoom: {
                required: true,
                type: Number
              },
              totalReservedCount: {
                required: true,
                type: Number
              },
              totalPrice: Number
            },
            { _id: false }
          )
        ],
        required: true
      }
    },
    {
      autoIndex: true
    }
  );

  model.index({ hostelId: 1, fromts: 1, tots: 1 }, { unique: true });

  return mongoose.model('HostelReservation', model);
};
