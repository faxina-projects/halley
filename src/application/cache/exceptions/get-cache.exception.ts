import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class GetCacheException extends InternalServerErrorException {
  constructor(reason: string, error?: unknown, data?: unknown) {
    super('Failed to get data from cache', reason, error, data);
  }
}

export { GetCacheException };
