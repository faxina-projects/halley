import { ICache } from '@/application/cache/interfaces';

import { IRedisService } from '../services';

class RedisAdapter implements ICache {
  constructor(private readonly redisService: IRedisService) {}

  save = async <T>(key: string, value: T): Promise<T> => {
    await this.redisService.set(key, JSON.stringify(value));
    return value;
  };

  get = async <T>(key: string): Promise<T | undefined> => {
    const data = await this.redisService.get(key);
    return data ? JSON.parse(data) : undefined;
  };

  delete = async (key: string): Promise<void> => {
    await this.redisService.del(key);
  };

  private getKeys = async (): Promise<string[]> => {
    const keys = await this.redisService.keys('*');

    return keys;
  };

  clear = async (): Promise<void> => {
    const keys = await this.getKeys();

    await Promise.all(keys.map((key) => this.delete(key)));
  };
}

export { RedisAdapter };
