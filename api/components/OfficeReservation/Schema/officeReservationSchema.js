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
      officeId: {
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

      offices: {
        type: [
          new Schema(
            {
              groupId: {
                type: ObjectId,
                required: true
              },
              officeType: String,
              officeName: String,
              pricePerOffice: {
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

  model.index({ officeId: 1, fromts: 1, tots: 1 });

  return mongoose.model('OfficeReservation', model);
};