// this require only for auto-complete
const Model = require('../Models/index');

// Inject dependency !no-requires
const buildOfficeReservationEntity = ({ ObjectId }) => {
  class OfficeReservation {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new OfficeReservation({ ...exists });
      return undefined;
    }

    constructor(officeReservatoionData = officeReservationSchema) {
      this.id = officeReservatoionData._id || ObjectId();
      this.renterId = officeReservatoionData.renterId;
      this.officeId = officeReservatoionData.officeId;
      this.fromts = officeReservatoionData.fromts;
      this.tots = officeReservatoionData.tots;
      this.totalPrice = officeReservatoionData.totalPrice;
      this.shouldPayPrice = officeReservatoionData.shouldPayPrice;
      this.reserveDatets = officeReservatoionData.reserveDatets;
      this.totalReservedCount = officeReservatoionData.totalReservedCount;
      this.offices = officeReservatoionData.offices;

      if (officeReservatoionData._id) this.updateObj = {};
      else this.updateObj = { ...officeReservatoionData, _id: this.id };
    }

    async save() {
      await Model.upsertOneById({
        id: this.id,
        update: this.updateObj
      });
    }

    TO_JSON() {
      return {
        id: this.id,
        renterId: this.renterId,
        officeId: this.officeId,
        fromts: this.fromts,
        tots: this.tots,
        totalPrice: this.totalPrice,
        shouldPayPrice: this.shouldPayPrice,
        reserveDatets: this.reserveDatets,
        totalReservedCount: this.totalReservedCount,
        offices: this.offices
      };
    }
  }

  return OfficeReservation;
};

module.exports = buildOfficeReservationEntity;

const officeReservationSchema = {
  _id: String,
  renterId: String,
  officeId: String,
  fromts: Number,
  tots: Number,
  totalPrice: Number,
  shouldPayPrice: Number,
  reserveDatets: Number,
  totalReservedCount: Number,
  offices: [
    {
      groupId: String,
      officeType: String,
      officeName: String,
      pricePerRoom: Number,
      totalReservedCount: Number,
      totalPrice: Number
    }
  ]
};
