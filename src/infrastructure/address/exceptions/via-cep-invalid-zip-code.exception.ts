import { BadRequestException } from '@/application/shared/http/exceptions';

class ViaCepInvalidZipCodeException extends BadRequestException {
  constructor(error?: unknown, data?: unknown) {
    super(
      'Failed to find address by zip code',
      'Invalid zip code',
      error,
      data,
    );
  }
}

export { ViaCepInvalidZipCodeException };
