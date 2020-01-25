const axios = require('axios');
const constants = require('../constants/defaults');

module.exports = ({}) => async (to, message, language = 'e') => {
  return new Promise((res, rej) => {
    const url = `http://epusheg.com/api/api.php/sendbulk/?username=${constants.SMS.USERNAME}&password=${constants.SMS.PASSWORD}&message=${message}&from=${constants.SMS.ID}&to=${to}&lang=${language}`;
    axios
      .post(url)
      .then(response => {
        // handle success
        if (response.data && response.data.net_balance) res(true);
        res(false);
      })
      .catch(error => {
        // handle error
        res(false);
      });
  });
};
