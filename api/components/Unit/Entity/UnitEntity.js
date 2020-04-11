// TODO: should be injected only
const bcjs = require('bcryptjs');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const Promise = require('bluebird');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const _jwt = Promise.promisifyAll(jsonwebtoken);
const __ObjectId = mongoose.Types.ObjectId;

const { ApplicationError: AppError } = require('../../../shared/errors');

// this require only for auto-complete
const Model = require('../Models');

// Inject dependency !no-requires
const buildUnitEntity = (
  obj = {
    bcrypt: bcjs,
    ApplicationError: AppError,
    ObjectId: __ObjectId,
    jwt: _jwt,
    _,
    pendingStatus
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { bcrypt, ApplicationError, ObjectId, jwt, _, pendingStatus } = obj;
  class UnitEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UnitEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByFacebookId(facebookId) {
      const exists = await Model.getOne({ query: { facebookId } });
      if (exists) return new UnitEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByGoogleId(googleId) {
      const exists = await Model.getOne({ query: { googleId } });
      if (exists) return new UnitEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByPhone(phone) {
      const exists = await Model.getOne({
        query: { phone }
      });
      if (exists) return new UnitEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        description: String,
        image: String,
        currency: String,
        address: {
          government: String,
          street: String,
          nearTo: String,
          highlight: String,
          houseNumber: Number,
          apartmentNumber: Number,
          floorNumber: Number
        },
        type: String,
        rentersType: String,
        numberOfPeople: Number,
        numberOfRooms: Number,
        hasFurniture: Boolean,
        availableCountNow: Number,
        pricePerPerson: String,
        dailyOrMonthly: String,
        highlight: String,
        availability: Array,
        services: Array,
        conditions: Array,
        gallery: Array,
        status: String
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || '';
      this.type = data.type || '';
      this.rentersType = data.rentersType || '';
      this.description = data.description || '';
      this.image = data.image || '';
      this.currency = data.currency || '';
      this.numberOfPeople = data.numberOfPeople || 0;
      this.numberOfRooms = data.numberOfRooms || 0;
      this.hasFurniture = data.hasFurniture || false;
      this.availableCountNow = data.availableCountNow || 0;
      this.pricePerPerson = data.pricePerPerson || 0;
      this.dailyOrMonthly = data.dailyOrMonthly || '';
      this.highlight = data.highlight || '';
      this.availability = data.availability || [];
      this.services = data.services || [];
      this.conditions = data.conditions || [];
      this.gallery = data.gallery || [];
      this.status = data.status || '';
      if (data.address) {
        this.address = {
          government: data.address.government || '',
          street: data.address.street || '',
          nearTo: data.address.nearTo || '',
          highlight: data.address.highlight || '',
          houseNumber: data.address.houseNumber || 1,
          apartmentNumber: data.address.apartmentNumber || 1,
          floorNumber: data.address.floorNumber || 1
        };
      } else {
        this.address = {
          government: '',
          street: '',
          nearTo: '',
          highlight: '',
          houseNumber: 1,
          apartmentNumber: 1,
          floorNumber: 1
        };
      }
      this.rates = data.rates || [];
      this.totalRate = data.totalRate || 0;
      this.totalUsersRated = data.totalUsersRated || 0;
      this.status = data.status || pendingStatus;
      this.note = data.note || '';
      this.totalOnlineBooking = data.totalOnlineBooking || 0;
      this.totalRevenue = data.totalRevenue || 0;
      this.isHidden = data.isHidden || false;
      this.isEditing = data.isEditing || false;
      this.isFull = data.isFull || false;
      this.isArchived = data.isArchived || false;
    }

    async save() {
      await Model.upsertOneById({
        id: this.id,
        update: this.mapToDb()
      });
    }

    // used by other services
    toJson() {
      return {
        id: this.id,
        userId: this.userId,
        type: this.type,
        description: this.description,
        image: this.image,
        currency: this.currency,
        address: this.address,
        rentersType: this.rentersType,
        numberOfPeople: this.numberOfPeople,
        numberOfRooms: this.numberOfRooms,
        hasFurniture: this.hasFurniture,
        availableCountNow: this.availableCountNow,
        pricePerPerson: this.pricePerPerson,
        dailyOrMonthly: this.dailyOrMonthly,
        highlight: this.highlight,
        availability: this.availability,
        services: this.services,
        conditions: this.conditions,
        gallery: this.gallery
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        userId: this.userId,
        name: this.name,
        phone: this.phone,
        email: this.email,
        managerEmail: this.managerEmail,
        description: this.description,
        image: this.image,
        currency: this.currency,
        address: {
          government: this.address.government,
          street: this.address.street,
          nearTo: this.address.nearTo,
          highlight: this.address.highlight,
          houseNumber: this.address.houseNumber,
          apartmentNumber: this.address.apartmentNumber,
          floorNumber: this.address.floorNumber
        },
        type: this.type,
        rentersType: this.rentersType,
        numberOfPeople: this.numberOfPeople,
        numberOfRooms: this.numberOfRooms,
        hasFurniture: this.hasFurniture,
        availableCountNow: this.availableCountNow,
        pricePerPerson: this.pricePerPerson,
        dailyOrMonthly: this.dailyOrMonthly,
        highlight: this.highlight,
        availability: this.availability,
        services: this.services,
        conditions: this.conditions,
        gallery: this.gallery,
        rates: this.rates,
        totalRate: this.totalRate,
        totalUsersRated: this.totalUsersRated,
        status: this.status,
        note: this.note,
        totalOnlineBooking: this.totalOnlineBooking,
        totalRevenue: this.totalRevenue,
        isEditing: this.isEditing,
        isFull: this.isFull,
        isHidden: this.isHidden,
        isArchived: this.isArchived
      };
    }
  }

  return UnitEntity;
};

module.exports = buildUnitEntity;
