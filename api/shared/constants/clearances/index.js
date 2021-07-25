const joinPlaces = require('./joinPlaces.json');

const major = 'clearances';

const data = {
  joinPlaces
};
const items = [];
Object.keys(data).map(key => {
  data[key].map(o => {
    items.push({ value: o, ar: o, type: key, major });
  });
});

module.exports = items;
