const colleges = require('./colleges.json');
const courseTypes = require('./courseTypes.json');
const crimeMajorLaws = require('./crimeMajorLaws.json');
const orderMakers = require('./orderMakers.json');
const punishments = require('./punishments.json');
const travelTypes = require('./travelTypes.json');
const countries = require('./countries.json');

const major = 'influences';
const data = {
  colleges,
  courseTypes,
  crimeMajorLaws,
  orderMakers,
  punishments,
  travelTypes,  
  countries
};
const items = [];
Object.keys(data).map(key => {
  data[key].map(o => {
    if (key === 'crimeMajorLaws') {
      return items.push({
        value: o.CRIME_MAJOR_NAME,
        ar: o.CRIME_MAJOR_NAME,
        crimeMajorCode: o.CRIME_MAJOR_CODE,
        type: key,
        major
      });
    }
    items.push({ value: o, ar: o, type: key, major });
  });
});

module.exports = items;
