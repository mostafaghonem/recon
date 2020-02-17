const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({
  rentersType,
  unitTypes,
  dailyOrMonthly,
  requestStates,
  currencies,
  unitFacilities
}) => {
  const Unit = new Schema(
    {
      owner: {
        type: ObjectId,
        required: true
      },
      type: {
        type: String,
        enum: unitTypes,
        required: true
      },
      renters_type: {
        type: String,
        enum: rentersType,
        required: true
      },
      number_of_people: {
        type: Number,
        required: true
      },
      has_furniture: {
        type: Boolean,
        default: false
      },
      available_count: {
        type: Number,
        default: 1
      },
      price_per_person: {
        type: Number,
        required: true
      },
      daiy_or_monthly: {
        type: String,
        enum: dailyOrMonthly
      },
      highlight: {
        type: String
      },
      description: {
        type: String,
        min: 2,
        max: 1000
      },
      currency: {
        type: String,
        default: currencies.EGP,
        enum: currencies
      },
      availability: [
        {
          in: {
            type: Date
          },
          out: {
            type: Date
          }
        }
      ],
      address: new Schema(
        {
          governorate: {
            type: String,
            required: true
          },
          street: {
            type: String,
            required: true
          },
          street_close_by: {
            type: String
          },
          street_mark: {
            type: String
          },
          unit_house_number: {
            type: String,
            required: true
          },
          unit_number: {
            type: String,
            required: true
          },
          unit_floor: {
            type: String,
            required: true
          }
        },
        {
          _id: false
        }
      ),
      facilities: [
        {
          type: String,
          enum: unitFacilities
        }
      ],
      owner_terms: [
        {
          type: String,
          min: 2,
          max: 255
        }
      ],
      image: {
        type: String
      },
      gallery: [
        {
          type: String
        }
      ],
      state: {
        type: String,
        enum: requestStates
      },
      reasonOfRefuse: {
        type: String,
        default: 'there is an request accept in your time before'
      }
    },
    {
      timestamps: true,
      autoIndex: true
    }
  );

  Unit.path('address').required(true);
  return mongoose.model('Unit', Unit);
};
