const getBaseDomain = () => {
  return process.env.BASE_URL
    ? process.env.BASE_URL.substring(
        process.env.BASE_URL.indexOf('.'),
        process.env.BASE_URL.length
      )
    : 'localhost';
};

module.exports = {
  getBaseDomain
};
