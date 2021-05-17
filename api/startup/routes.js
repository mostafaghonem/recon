const staticFile = require('connect-static-file');
const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const nuxtConfig = require('./nuxt');

const ErrorHandler = require('../middlewares/errorHandlerMiddleware');
const MinioHandler = require('../middlewares/minioMiddlware');
const User = require('../components/User');
const Recommendation = require('../components/Recommendation');
const Soldier = require('../components/Soldier');
const Staff = require('../components/Staff');
const Division = require('../components/Division');
const Mail = require('../components/Mail');
const Constant = require('../components/Constant');
const Influences = require('../components/Influences');
const Clearance = require('../components/Clearance');
const ChangeOfUnit = require('../components/ChangeOfUnit');
const Upload = require('../components/uploader');

module.exports = async app => {
  app.use('/uploads', express.static(path.resolve('./uploads')));
  app.get('/sw.js', express.static(path.join(__dirname, '../../public/sw.js')));

  app.use('/api/users', User.Router);
  app.use('/api/soldiers', Soldier.Router);
  app.use('/api/staffs', Staff.Router);
  app.use('/api/recommendations', Recommendation.Router);
  app.use('/api/divisions', Division.Router);
  app.use('/api/mail', Mail.Router);
  app.use('/api/constant', Constant.Router);
  app.use('/api/influence', Influences.Router);
  app.use('/api/Clearance', Clearance.Router);
  app.use('/api/change-of-unit', ChangeOfUnit.Router);
  app.use('/api/upload', Upload.Router);
  app.use('/api/minio', MinioHandler);
  app.use(favicon(path.resolve('./public/favicon.ico')));
  app.use('/sw.js', staticFile(path.resolve('./public/sw.js')));
  app.use(
    '/template.docx',
    express.static(path.resolve('./public/template.docx'))
  );
  app.use(
    '/soldiers.docx',
    express.static(path.resolve('./public/soldiers.docx'))
  );
  app.use('/staffs.docx', express.static(path.resolve('./public/staffs.docx')));
  // ! nuxt config
  await nuxtConfig(app);
  app.use(ErrorHandler.catch404Errors);
  app.use(ErrorHandler.handleUnexpectedErrors);
};
