import { ICache } from '@/application/cache/interfaces';
import { HttpBaseException } from '@/application/shared/http/exceptions';

import { AddressDTO } from '../dtos';
import { GetAddressByZipCodeException } from '../exceptions';
import { IAddressFinder } from '../interfaces';
import { IGetAddressByZipCodeService } from './get-address-by-zipcode.service.interface';

class GetAddressByZipCodeService implements IGetAddressByZipCodeService {
  constructor(
    private readonly addressFinder: IAddressFinder,
    private readonly cache: ICache,
  ) {}

  findByZipCode = async (zipCode: string): Promise<AddressDTO> => {
    try {
      const addressCached = await this.findCachedAddressData(zipCode);

      if (addressCached) {
        return addressCached;
      }

      const addressData = await this.addressFinder.findByZipCode(zipCode);
      await this.cache.save<AddressDTO>(zipCode, addressData);

      return addressData;
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }

      throw new GetAddressByZipCodeException(error.message, error, { zipCode });
    }
  };

  private findCachedAddressData = async (
    zipCode: string,
  ): Promise<AddressDTO | undefined> => {
    try {
      const addressCached = await this.cache.get<AddressDTO>(zipCode);

      return addressCached;
    } catch (error: any) {
      throw new GetAddressByZipCodeException(error.message, error, { zipCode });
    }
  };
}

export { GetAddressByZipCodeService };
