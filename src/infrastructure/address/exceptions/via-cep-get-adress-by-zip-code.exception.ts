import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class ViaCepGetAddressByZipCodeException extends InternalServerErrorException {
  constructor(reason: string, error?: unknown, data?: unknown) {
    super('Failed to find address by zip code', reason, error, data);
  }
}

export { ViaCepGetAddressByZipCodeException };
