import Redis from 'ioredis';
import { logger } from '../../utils/logger';
import * as dotenv from 'dotenv';

dotenv.config();

const redisPort = parseInt(process.env.CACHE_PORT || '6379', 10); 
const redisHost = process.env.CACHE_HOST || '127.0.0.1';

const redisClient = new Redis({
  host: redisHost,
  port: redisPort,
  maxRetriesPerRequest: null,
});

redisClient.on('ready', () => {
  logger.info(`Redis is ready to start on port: ${redisPort}`);
});
redisClient.on('error', (err) => logger.error(err));
redisClient.on('close', () => logger.info('Redis is closing'));

export { redisClient };
