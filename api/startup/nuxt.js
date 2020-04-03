const { loadNuxt } = require('nuxt');

module.exports = async app => {
  // We get Nuxt instance
  const nuxt = await loadNuxt({ for: 'start' });
  // Render every route with Nuxt.js
  app.use(nuxt.render);
  // Build only in dev mode with hot-reloading
  //   build(nuxt);
};
