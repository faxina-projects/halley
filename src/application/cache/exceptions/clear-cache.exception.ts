import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class ClearCacheException extends InternalServerErrorException {
  constructor(reason: string, error?: unknown, data?: unknown) {
    super('Failed to clear data from cache', reason, error, data);
  }
}

export { ClearCacheException };
