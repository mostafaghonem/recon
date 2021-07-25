const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddChangeOfUnit = require('./add-change-of-unit');
const makeGetUploadedChangesOfUnit = require('./get-changes-of-unit');
const makeUpdateUploadedUnitChange = require('./update-uploaded-unit-request');

const addChangeOfUnit = makeAddChangeOfUnit();
const getChangesOfUnit = makeGetUploadedChangesOfUnit({
  pagination
});
const updateUploadedUnitChange = makeUpdateUploadedUnitChange({});

const UploadedChangesOfUnitCtrl = Object.freeze({
  addChangeOfUnit,
  getChangesOfUnit,
  updateUploadedUnitChange
});

module.exports = UploadedChangesOfUnitCtrl;
