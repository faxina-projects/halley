import Redis from 'ioredis';

import { IRedisService } from './redis.service.interface';

class RedisService implements IRedisService {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis({
      host: 'halley-redis-server',
      port: 6379,
    });
  }

  set = async (key: string, value: string): Promise<void> => {
    await this.client.set(key, JSON.stringify(value));
  };

  get = async (key: string): Promise<string | undefined> => {
    const data = await this.client.get(key);
    return data ? JSON.parse(data) : undefined;
  };

  del = async (key: string): Promise<void> => {
    await this.client.del(key);
  };

  keys = async (pattern: string): Promise<string[]> => {
    const keys = await this.client.keys(pattern);

    return keys;
  };
}

export { RedisService };
