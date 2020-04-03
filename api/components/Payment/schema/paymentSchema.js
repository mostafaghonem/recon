const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = () => {
  const User = new Schema(
    {
      orderId: {
        type: String,
        required: true
      },
      reservationId: {
        type: ObjectId,
        required: true
      }
    },
    {
      timestamps: true,
      autoIndex: true
    }
  );

  return mongoose.model('paymentOrder', User);
};
