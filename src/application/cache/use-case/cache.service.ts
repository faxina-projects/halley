import {
  ClearCacheException,
  DeleteCacheException,
  GetCacheException,
  SaveCacheException,
} from '../exceptions';
import { ICache } from '../interfaces';

class CacheService implements ICache {
  constructor(private readonly cache: ICache) {}

  save = async <T>(key: string, value: T): Promise<T> => {
    try {
      await this.cache.save<T>(key, value);
      return value;
    } catch (error: any) {
      throw new SaveCacheException(error.message, error, { key, value });
    }
  };

  get = async <T>(key: string): Promise<T | undefined> => {
    try {
      const data = await this.cache.get<T>(key);
      return data;
    } catch (error: any) {
      throw new GetCacheException(error.message, error, { key });
    }
  };

  delete = async (key: string): Promise<void> => {
    try {
      await this.cache.delete(key);
    } catch (error: any) {
      throw new DeleteCacheException(error.message, error, { key });
    }
  };

  clear = async (): Promise<void> => {
    try {
      await this.cache.clear();
    } catch (error: any) {
      throw new ClearCacheException(error.message, error);
    }
  };
}

export { CacheService };
