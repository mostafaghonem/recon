// this require only for auto-complete
const Model = require('../Models/index');

// Inject dependency !no-requires
const buildHostelReservationEntity = ({ ObjectId }) => {
  class HostelReservation {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new HostelReservation({ ...exists });
      return undefined;
    }

    constructor(hostelReservatoionData = hostelReservationSchema) {
      this.id = hostelReservatoionData._id || ObjectId();
      this.renterId = hostelReservatoionData.renterId;
      this.hostelId = hostelReservatoionData.hostelId;
      this.fromts = hostelReservatoionData.fromts;
      this.tots = hostelReservatoionData.tots;
      this.totalPrice = hostelReservatoionData.totalPrice;
      this.shouldPayPrice = hostelReservatoionData.shouldPayPrice;
      this.reserveDatets = hostelReservatoionData.reserveDatets;
      this.totalReservedCount = hostelReservatoionData.totalReservedCount;
      this.rooms = hostelReservatoionData.rooms;

      if (hostelReservatoionData._id) this.updateObj = {};
      else this.updateObj = { ...hostelReservatoionData, _id: this.id };
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
        hostelId: this.hostelId,
        fromts: this.fromts,
        tots: this.tots,
        totalPrice: this.totalPrice,
        shouldPayPrice: this.shouldPayPrice,
        reserveDatets: this.reserveDatets,
        totalReservedCount: this.totalReservedCount,
        rooms: this.rooms
      };
    }
  }

  return HostelReservation;
};

module.exports = buildHostelReservationEntity;

const hostelReservationSchema = {
  _id: String,
  renterId: String,
  hostelId: String,
  fromts: Number,
  tots: Number,
  totalPrice: Number,
  shouldPayPrice: Number,
  reserveDatets: Number,
  totalReservedCount: Number,
  rooms: [
    {
      groupId: String,
      roomType: String,
      roomName: String,
      pricePerRoom: Number,
      totalReservedCount: Number,
      totalPrice: Number
    }
  ]
};
