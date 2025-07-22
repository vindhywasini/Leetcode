const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-14218.crce179.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 14218
    }
});

module.exports = redisClient;