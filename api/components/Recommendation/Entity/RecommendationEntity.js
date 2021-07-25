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
const buildRecommendationEntity = (
  obj = {
    bcrypt: bcjs,
    ApplicationError: AppError,
    ObjectId: __ObjectId,
    jwt: _jwt,
    _
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { bcrypt, ApplicationError, ObjectId, jwt, _, pendingStatus } = obj;
  class RecommendationEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new RecommendationEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        militaryId: String,
        recordId: String,
        name: {
          firstName: String,
          middleName: String,
          lastName: String,
          familyName: String
        },
        fullName: String,
        recruitmentArea: String,
        tripleNumber: String,
        address: {
          governate: String,
          centre: String,
          village: String
        },
        force: String,
        army: String,
        birthDate: Date,
        joinDate: Date,
        releaseDate: Date,
        recruitmentLevel: String,
        education: String,
        influences: Array,
        unit: Object,
        units: Array,
        situation: String,
        treatment: String,
        totalRate: Number,
        status: String
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.militaryId = data.militaryId;
      this.recordId = data.recordId;
      this.force = data.force;
      this.army = data.army;
      this.joinDate = data.joinDate;
      this.releaseDate = data.releaseDate;
      this.recruitmentLevel = data.recruitmentLevel;
      this.recruitmentArea = data.recruitmentArea;
      this.education = data.education;
      this.influences = data.influences || [];
      this.unit = data.unit || {};
      this.units = data.units || [];
      this.situation = data.situation;
      this.treatment = data.treatment;
      this.totalRate = data.totalRate || 0;
      this.name = data.name || {};
      this.fullName = data.fullName || '';
      this.recruitmentArea = data.recruitmentArea;
      this.tripleNumber = data.tripleNumber || '';

      this.status = data.status || '';
      if (data.address) {
        this.address = {
          governate: data.address.governate || '',
          centre: data.address.centre || '',
          village: data.address.village || ''
        };
      } else {
        this.address = {
          governate: '',
          centre: '',
          village: ''
        };
      }
      this.status = data.status || pendingStatus;
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
        militaryId: this.militaryId,
        recordId: this.recordId,
        force: this.force,
        army: this.army,
        address: this.address,
        joinDate: this.joinDate,
        releaseDate: this.releaseDate,
        recruitmentLevel: this.recruitmentLevel,
        recruitmentArea: this.recruitmentArea,
        education: this.education,
        influences: this.influences,
        unit: this.unit,
        units: this.units,
        situation: this.situation,
        treatment: this.treatment,
        totalRate: this.totalRate,
        name: this.name,
        fullName: this.fullName,
        tripleNumber: this.tripleNumber
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        militaryId: this.militaryId,
        recordId: this.recordId,
        force: this.force,
        army: this.army,
        address: this.address,
        joinDate: this.joinDate,
        releaseDate: this.releaseDate,
        recruitmentLevel: this.recruitmentLevel,
        recruitmentArea: this.recruitmentArea,
        education: this.education,
        influences: this.influences,
        unit: this.unit,
        units: this.units,
        situation: this.situation,
        treatment: this.treatment,
        totalRate: this.totalRate,
        name: this.name,
        fullName: this.fullName,
        tripleNumber: this.tripleNumber,
        isEditing: this.isEditing,
        isFull: this.isFull,
        isHidden: this.isHidden,
        isArchived: this.isArchived
      };
    }
  }

  return RecommendationEntity;
};

module.exports = buildRecommendationEntity;
