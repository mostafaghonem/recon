const express = require('express');
const path = require('path');
const ErrorHandler = require('../middlewares/errorHandlerMiddleware');
const User = require('../components/User');
const identityRequests = require('../components/identityRequests');
const hostels = require('../components/hostels');
const uploadedHostelsRequests = require('../components/uploadedHostelsRequests');
const HostelReservation = require('../components/HostelReservation');
const uploader = require('../components/uploader');
const Units = require('../components/Unit');

module.exports = app => {
  app.use('/', express.static(path.join(__dirname, '../../public')));
  app.use('/api/uploader', uploader.Router);
  app.use('/api/users', User.Router);
  app.use('/api/identityRequests', identityRequests.Router);
  app.use('/api/hostels', hostels.Router);
  app.use('/api/requests/uploaded/hostels', uploadedHostelsRequests.Router);
  app.use('/api/hostel-reservations', HostelReservation.Router);
  app.use('/api/units', Units.Router);
  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
