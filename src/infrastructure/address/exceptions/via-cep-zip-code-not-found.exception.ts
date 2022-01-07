import { NotFoundException } from '@/application/shared/http/exceptions';

class ViaCepZipCodeNotFoundException extends NotFoundException {
  constructor(data?: unknown) {
    super(
      'Failed to find address by zip code',
      'Data not found for this zip code',
      undefined,
      data,
    );
  }
}

export { ViaCepZipCodeNotFoundException };
