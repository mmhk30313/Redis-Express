const redis = require('redis');
const redisPort = process.env.REDIS_POST;
const redisHost = process.env.REDIS_HOST;
const client = redis.createClient(redisPort, redisHost);
async function createRedisClient () {

  client.on('connect', () => console.log('Connected to REDIS!'));
  client.on('error', (err) => console.log('Error connecting to REDIS: ', err));

  await client.connect();

  return client;
}

module.exports = createRedisClient();