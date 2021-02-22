process.env.DEBUG = 'nuxt:*';
process.env.NUXT_TELEMETRY_DISABLED = 1;

const { loadNuxt } = require('nuxt');

module.exports = async app => {
  try {
    // We get Nuxt instance
    const nuxt = await loadNuxt({ for: 'start' });
    // Render every route with Nuxt.js
    app.use(nuxt.render);
    // Build only in dev mode with hot-reloading
    // build(nuxt);
    return true;
  } catch (err) {
    console.log('Error loading Nuxt ======================>', err.message);
  }
};
