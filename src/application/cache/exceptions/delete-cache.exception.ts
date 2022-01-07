import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class DeleteCacheException extends InternalServerErrorException {
  constructor(reason: string, error?: unknown, data?: unknown) {
    super('Failed to delete data from cache', reason, error, data);
  }
}

export { DeleteCacheException };
