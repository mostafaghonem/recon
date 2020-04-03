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
const Model = require('../models');

// Inject dependency !no-requires
const buildHostelEntity = (
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
  class HostelEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new HostelEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByFacebookId(facebookId) {
      const exists = await Model.getOne({ query: { facebookId } });
      if (exists) return new HostelEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByGoogleId(googleId) {
      const exists = await Model.getOne({ query: { googleId } });
      if (exists) return new HostelEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByPhone(phone) {
      const exists = await Model.getOne({
        query: { phone }
      });
      if (exists) return new HostelEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        name: String,
        phone: String,
        email: String,
        managerEmail: String,
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
        rooms: Array,
        freeServices: Array,
        generalServices: Array,
        hostelServices: Array,
        entertainmentServices: Array,
        foodServices: Array
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || '';
      this.name = data.name || '';
      this.phone = data.phone || '';
      this.email = data.email || '';
      this.managerEmail = data.managerEmail || '';
      this.description = data.description || '';
      this.image = data.image || '';
      this.currency = data.currency || '';
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
      this.freeServices = data.freeServices || [];
      this.generalServices = data.generalServices || [];
      this.hostelServices = data.hostelServices || [];
      this.entertainmentServices = data.entertainmentServices || [];
      this.foodServices = data.foodServices || [];
      this.rooms = data.rooms || [];
      this.rates = data.rates || [];
      this.totalRate = data.totalRate || 0;
      this.rate = data.rate || 0;
      this.totalUsersRated = data.totalUsersRated || 0;
      this.status = data.status || pendingStatus;
      this.note = data.note || '';
      this.totalOnlineBooking = data.totalOnlineBooking || 0;
      this.totalRevenue = data.totalRevenue || 0;
      this.isHidden = data.isHidden || false;
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
        name: this.name,
        phone: this.phone,
        email: this.email,
        managerEmail: this.managerEmail,
        description: this.description,
        image: this.image,
        currency: this.currency,
        address: this.address,
        freeServices: this.freeServices,
        generalServices: this.generalServices,
        hostelServices: this.hostelServices,
        entertainmentServices: this.entertainmentServices,
        foodServices: this.foodServices,
        rooms: this.rooms
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
        freeServices: this.freeServices,
        generalServices: this.generalServices,
        hostelServices: this.hostelServices,
        entertainmentServices: this.entertainmentServices,
        foodServices: this.foodServices,
        rooms: this.rooms,
        rates: this.rates,
        totalRate: this.totalRate,
        rate: this.rate,
        totalUsersRated: this.totalUsersRated,
        status: this.status,
        note: this.note,
        totalOnlineBooking: this.totalOnlineBooking,
        totalRevenue: this.totalRevenue,
        isHidden: this.isHidden,
        isArchived: this.isArchived
      };
    }
  }

  return HostelEntity;
};

module.exports = buildHostelEntity;
