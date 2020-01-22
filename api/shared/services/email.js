const nodemailer = require('nodemailer');
const constants = require('../constants/defaults');
const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  auth: false /*{
    user: 'project.1',
    pass: 'secret.1'
}*/
});

module.exports = ({}) => async (
  to = [],
  subject = '',
  message = '',
  html = '',
  attachments = [],
  list = {}
) => {
  to = to.join(', ') || '';
  let mailOptions = {
    from: '"SKN" <skn@gmail.com>',
    to,
    subject,
    text: message,
    html,
    attachments,
    list
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      // console.log('sendmail' + error);
      // return error.message;
    } else {
      // console.log('Email sent: ' + info.response);
      transporter.close();
    }
  });
};
