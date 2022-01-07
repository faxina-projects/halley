import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class ViaCepGetAddressByZipCodeException extends InternalServerErrorException {
  constructor(reason: string, error?: any, data?: any) {
    super('Failed to find address by zip code', reason, error, data);
  }
}

export { ViaCepGetAddressByZipCodeException };
