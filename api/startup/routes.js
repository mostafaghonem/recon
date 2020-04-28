const staticFile = require('connect-static-file');
const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const nuxtConfig = require('./nuxt');

const ErrorHandler = require('../middlewares/errorHandlerMiddleware');
const User = require('../components/User');
const identityRequests = require('../components/identityRequests');
const hostels = require('../components/hostels');
const uploadedHostelsRequests = require('../components/uploadedHostelsRequests');
const editHostelsRequests = require('../components/editHostelsRequests');
const UploadedUnitRequests = require('../components/UploadedUnitRequests');
const HostelReservation = require('../components/HostelReservation');
const uploader = require('../components/uploader');
const Units = require('../components/Unit');
const EventManager = require('../components/EventManager');
const Payment = require('../components/Payment');
const reservationRouter = require('../components/UnitReservation/Router');

module.exports = async app => {
  app.get('/sw.js', express.static(path.join(__dirname, '../../public/sw.js')));
  app.use('/api/uploader', uploader.Router);
  app.use('/api/users', User.Router);
  app.use('/api/identityRequests', identityRequests.Router);
  app.use('/api/hostels', hostels.Router);
  app.use('/api/requests/uploaded/hostels', uploadedHostelsRequests.Router);
  app.use('/api/requests/edit/hostels', editHostelsRequests.Router);
  app.use('/api/requests/uploaded/units', UploadedUnitRequests.Router);
  app.use('/api/hostel-reservations', HostelReservation.Router);
  app.use('/api/units', Units.Router);
  app.use('/api/payment', Payment.Router);
  app.use('/api/unit-reservation', reservationRouter);
  app.use('/api/events', EventManager.Router);

  app.use(favicon(path.resolve('./public/favicon.ico')));
  app.use('/sw.js', staticFile(path.resolve('./public/sw.js')));
  // ! nuxt config
  await nuxtConfig(app);

  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
