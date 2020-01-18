const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient({
  no_ready_check: true,
  host: process.env.REDIS_HOST,
  auth_pass: process.env.REDIS_PASS
});

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setexAsync: promisify(client.setex).bind(client)
  // keysAsync: promisify(client.keys).bind(client)
};
