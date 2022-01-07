import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class SaveCacheException extends InternalServerErrorException {
  constructor(reason: string, error?: unknown, data?: unknown) {
    super('Failed to save data to cache', reason, error, data);
  }
}

export { SaveCacheException };
